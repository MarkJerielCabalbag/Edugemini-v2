import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { GoogleGenAI } from '@google/genai';
import { GoogleAIFileManager, FileState } from '@google/generative-ai/server';
import { SupabaseClient } from '@supabase/supabase-js';
import * as fs from 'fs';

import officeParser, { parseOffice, parseOfficeAsync } from 'officeparser';

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
    const genAI = new GoogleGenAI({
      apiKey: process.env.GEMINI_KEY,
    });

    // const response = await genAI.models.generateContent({
    //   model: process.env.GEMINI_MODEL || 'gemini-2.0-flash',
    //   contents: {
    //     text: prompt,
    //   },
    // });

    // console.log('Gemini response:', response.text);
    // console.log('Student ID:', studentId);

    const student = await this.dataService.student.findUnique({
      where: { userId: studentId },
    });

    const output = await this.dataService.output.findMany({
      where: {
        roomId: roomId,
        activityId: workId,
        studentId: studentId,
      },
      select: {
        listOfFiles: true,
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

    if (
      instructionFilePath?.filename?.split('.').pop() === 'docx' ||
      instructionFilePath?.filename?.split('.').pop() === 'pdf' ||
      instructionFilePath?.filename?.split('.').pop() === 'txt'
    ) {
      const parsedBufferToFile = await parseOfficeAsync(instructionBlob)
        .then((data) => data)
        .catch((err) => err);

      console.log('Parsed Instruction:', parsedBufferToFile);
    }

    const outputData = await Promise.all(
      output.map(async (item) => {
        const files = item.listOfFiles.map((file) => ({
          filename: file.filename,
          filepath: file.filePath,
        }));
        return { files };
      }),
    );

    // const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_KEY });
    // const filemanager = new GoogleAIFileManager(
    //   process.env.GEMINI_API_KEY as string,
    // );
    // for (const item of outputData) {
    //   for (const file of item.files) {
    //     const { data, error } = await this.supabase.storage
    //       .from('edugemini')
    //       .download(file.filepath as string);

    //     if (error) {
    //       console.error(`Error downloading ${file.filename}`, error);
    //       continue;
    //     }

    //     const uploadedFile = await filemanager.uploadFile({
    //       file: data,
    //       filename: file.filename,
    //     });
    //     const result = await ai.models.generateContent({
    //       model: process.env.GEMINI_MODEL as string,
    //       contents: [
    //         {
    //           text: `This is the content of file "${file.filename}":\n\n${uploadedFile}\n\nPlease summarize it.`,
    //         },
    //       ],
    //     });

    //     const output = result.text;
    //     console.log(`Summary for ${file.filename}:\n`, output);
    //   }
    // }

    if (!student)
      throw new HttpException(
        { message: 'Student does not exist' },
        HttpStatus.BAD_REQUEST,
      );
  }
}
