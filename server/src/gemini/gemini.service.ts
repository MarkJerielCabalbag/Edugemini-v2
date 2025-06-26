import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { GoogleGenAI } from '@google/genai';
import { GoogleAIFileManager, FileState } from '@google/generative-ai/server';
import { SupabaseClient } from '@supabase/supabase-js';
import * as fs from 'fs';

import officeParser, { parseOffice, parseOfficeAsync } from 'officeparser';
import { bufferToParseOfficeDocument } from 'src/utils/utils-blobToText';
import { geminiPrompt } from 'src/utils/gemini-prompt';

@Injectable()
export class GeminiService {
  constructor(
    private readonly supabase: SupabaseClient,
    private readonly dataService: DatabaseService,
  ) {}

  async submit(
    prompt: string,
    studentId: number,
    workId: number,
    roomId: number,
  ) {
    const student = await this.dataService.student.findUnique({
      where: { userId: studentId },
    });

    if (!student)
      throw new HttpException(
        { message: 'Student does not exist' },
        HttpStatus.BAD_REQUEST,
      );

    const output = await this.dataService.output.findMany({
      where: {
        roomId: roomId,
        activityId: workId,
        studentId: studentId,
      },
      select: {
        listOfFiles: true,
        id: true,
      },
    });

    const instructionFilePath = await this.dataService.files.findFirst({
      where: {
        activityId: workId,
      },
    });

    //extract first the instruction file - docx - pdf - txt - png - jpg - jpeg
    let instructionBlob;

    if (instructionFilePath?.filePath) {
      const { data, error } = await this.supabase.storage
        .from(process.env.SUPABASE_BUCKET as string)
        .download(instructionFilePath?.filePath);

      if (error) {
        throw new HttpException(
          { message: 'Error downloading instruction file', error },
          HttpStatus.BAD_REQUEST,
        );
      }

      instructionBlob = Buffer.from(await data.arrayBuffer());
    } else {
      throw new HttpException(
        { message: 'Instruction file not found' },
        HttpStatus.NOT_FOUND,
      );
    }

    // parse the instruction file based on its mimetype
    if (
      instructionFilePath?.filename?.split('.').pop() === 'docx' ||
      instructionFilePath?.filename?.split('.').pop() === 'pdf' ||
      instructionFilePath?.filename?.split('.').pop() === 'txt'
    ) {
      const parsedBufferToFile = await parseOfficeAsync(instructionBlob)
        .then((data) => data)
        .catch((err) => err);

      instructionBlob = parsedBufferToFile;
    } else if (instructionFilePath?.filename?.split('.').pop() === 'png') {
      const response = await bufferToParseOfficeDocument(
        instructionBlob,
        'image/png',
      );

      instructionBlob = response;
    } else if (instructionFilePath?.filename?.split('.').pop() === 'jpg') {
      const response = await bufferToParseOfficeDocument(
        instructionBlob,
        'image/png',
      );

      instructionBlob = response;
    } else if (instructionFilePath?.filename?.split('.').pop() === 'jpeg') {
      const response = await bufferToParseOfficeDocument(
        instructionBlob,
        'image/png',
      );

      instructionBlob = response;
    }

    // parse the student's output files based on their mimetype

    const studentFiles = await Promise.all(
      output.map(async (item) => {
        return Promise.all(
          item.listOfFiles.map(async (file) => {
            const { data, error } = await this.supabase.storage
              .from(process.env.SUPABASE_BUCKET as string)
              .download(file?.filePath as string);

            if (error) {
              throw new HttpException(
                { message: 'Error downloading student file', error },
                HttpStatus.BAD_REQUEST,
              );
            }

            let studentfileContent;
            const blob = Buffer.from(await data.arrayBuffer());

            if (file?.filename) {
              const ext = file.filename.split('.').pop();
              if (ext === 'docx' || ext === 'pdf' || ext === 'txt') {
                studentfileContent = await parseOfficeAsync(blob);
              } else if (ext === 'png') {
                studentfileContent = await bufferToParseOfficeDocument(
                  blob,
                  'image/png',
                );
              } else if (ext === 'jpg' || ext === 'jpeg') {
                studentfileContent = await bufferToParseOfficeDocument(
                  blob,
                  'image/jpg',
                );
              } else {
                studentfileContent = blob.toString('utf-8');
              }
            }
            return studentfileContent;
          }),
        );
      }),
    );

    // prompt to generate the feedback for student
    const studentFeedbackPrompt = await geminiPrompt(
      `Evaluate the submissions [${studentFiles.toString()}] against the guidelines set in the instruction file [${instructionBlob}]. Highlight effective elements and provide recommendations for improving coherence and argumentation.`,
    );

    // prompt to generate the feedback for instructor
    const instructorFeedbackPrompt = await geminiPrompt(
      `Evaluate the submissions [${studentFiles.toString()}] against the guidelines set in the instruction file [${instructionBlob}]. Provide a detailed analysis of the student's work, including strengths and areas for improvement.`,
    );
    // prompt to generate the feedback score
    const feedbackScorePrompt = await geminiPrompt(
      `Based on the evaluation of the submissions [${studentFiles.toString()}] and the guidelines set in the instruction file [${instructionBlob}]. Return only a number, dont include any explanations, i just want the exact number or total score.`,
    );

    console.log(
      'Student Feedback Prompt:',
      studentFeedbackPrompt,
      'Instructor Feedback Prompt:',
      instructorFeedbackPrompt,
      'Feedback Score Prompt:',
      feedbackScorePrompt,
    );

    if (feedbackScorePrompt && feedbackScorePrompt && output) {
      const feedback = await this.dataService.feedback.create({
        data: {
          feedback: studentFeedbackPrompt,
        },
      });

      const score = await this.dataService.score.create({
        data: {
          score: parseInt(feedbackScorePrompt),
        },
      });

      await this.dataService.output.update({
        where: {
          roomId_activityId_studentId: {
            roomId: roomId,
            activityId: workId,
            studentId: studentId,
          },
        },
        data: {
          relatedToScore: {
            connect: {
              id: score.id,
            },
          },
          relatedToFeedback: {
            connect: {
              id: feedback.id,
            },
          },
        },
      });
    }
  }
}
