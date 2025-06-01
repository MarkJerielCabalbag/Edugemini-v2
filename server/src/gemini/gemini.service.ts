import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { GoogleGenAI } from '@google/genai';

@Injectable()
export class GeminiService {
  constructor(private readonly dataService: DatabaseService) {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_KEY });
  }

  async submit() {}
}
