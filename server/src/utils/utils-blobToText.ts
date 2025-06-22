import {
  createPartFromUri,
  createUserContent,
  GoogleGenAI,
} from '@google/genai';

export async function bufferToParseOfficeDocument(
  blob: Buffer,
  mimeType: string,
) {
  // const ai = new GoogleGenAI({
  //   apiKey: process.env.GEMINI_KEY as string,
  // });

  // const file = await ai.files.upload({
  //   file: blob,
  //   config: {
  //     mimeType: mimeType,
  //   },
  // });

  const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_KEY as string });

  const file = new File([blob], `document.${mimeType.split('/')[1]}`);

  const uploadResult = await genAI.files.upload({
    file: file,
    config: {
      mimeType: mimeType,
    },
  });

  if (uploadResult?.uri) {
    const result = await genAI.models.generateContent({
      model: process.env.GEMENI_KEY || 'gemini-2.0-flash',
      contents: createUserContent([
        createPartFromUri(uploadResult.uri, mimeType),
        'I want you to copy the text of this image because this will serve as instruction, if any visual elements are included in this image, i want you to describe it accurately without changing the instructions',
      ]),
    });

    return result.text;
  }
}
