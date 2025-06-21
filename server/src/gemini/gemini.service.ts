import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import {
  createPartFromUri,
  createUserContent,
  GoogleGenAI,
} from '@google/genai';
import { SupabaseClient } from '@supabase/supabase-js';
import * as fs from 'fs';
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

    console.log('Output:', output);

    const outputData = await Promise.all(
      output.map(async (item) => {
        const files = item.listOfFiles.map((file) => ({
          filename: file.filename,
          filepath: file.filePath,
        }));
        return { files };
      }),
    );

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_KEY });

    for (const item of outputData) {
      for (const file of item.files) {
        const { data, error } = await this.supabase.storage
          .from('edugemini')
          .download(file.filepath as string);

        if (error) {
          console.error(`Error downloading ${file.filename}`, error);
          continue;
        }

        const arrayBuffer = await data.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const result = await ai.models.generateContent({
          model: process.env.GEMINI_MODEL as string,
          contents: [
            {
              text: `This is the content of file "${file.filename}":\n\n${buffer}\n\nPlease summarize it.`,
            },
          ],
        });

        const output = result.text;
        console.log(`Summary for ${file.filename}:\n`, output);
      }
    }

    if (!student)
      throw new HttpException(
        { message: 'Student does not exist' },
        HttpStatus.BAD_REQUEST,
      );
  }
}
