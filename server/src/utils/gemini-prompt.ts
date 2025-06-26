import { GoogleGenAI } from '@google/genai';

export async function geminiPrompt(prompt: string) {
  const genAI = new GoogleGenAI({
    apiKey: process.env.GEMINI_KEY as string,
  });

  const response = await genAI.models.generateContent({
    model: process.env.GEMINI_MODEL || 'gemini-2.0-flash',
    contents: prompt,
  });

  return response.text;
}
