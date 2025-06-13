import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { GoogleGenAI } from '@google/genai';

@Injectable()
export class GeminiService {
  constructor(private readonly dataService: DatabaseService) {}

  async submit(prompt: string, studentId: number) {
    const genAI = new GoogleGenAI({
      apiKey: process.env.GEMINI_KEY,
    });

    const response = await genAI.models.generateContent({
      model: process.env.GEMINI_MODEL || 'gemini-2.0-flash',
      contents: {
        text: prompt,
      },
    });

    console.log('Gemini response:', response.text);
    console.log('Student ID:', studentId);

    const student = await this.dataService.student.findUnique({
      where: { userId: studentId },
    });

    if (!student)
      throw new HttpException(
        { message: 'Student does not exist' },
        HttpStatus.BAD_REQUEST,
      );
  }
}
