import { StorageEngine } from 'multer';
import { join } from 'path';
import { existsSync, mkdirSync, writeFile } from 'fs';
import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AsyncDiskStorage implements StorageEngine {
  constructor(private readonly databaseService: DatabaseService) {}

  async _handleFile(
    req: Request,
    file: Express.Multer.File,
    callback: (error?: any, info?: Partial<Express.Multer.File>) => void,
  ) {
    try {
      const roomId = Number(req.params.roomId);
      const classroom = await this.databaseService.classroom.findUnique({
        where: { id: roomId },
      });

      if (!classroom) {
        return callback(new Error('Classroom not found'), undefined);
      }

      const uploadPath = join(process.cwd(), 'uploads', classroom.classname);

      if (!existsSync(uploadPath)) {
        mkdirSync(uploadPath, { recursive: true });
      }

      const filename = `${Date.now()}-${file.originalname}`;
      const finalPath = join(uploadPath, filename);

      const chunks: Buffer[] = [];
      file.stream.on('data', (chunk) => chunks.push(chunk));
      file.stream.on('end', () => {
        const buffer = Buffer.concat(chunks);
        writeFile(finalPath, buffer, (err) => {
          if (err) return callback(err);
          callback(null, {
            filename,
            path: finalPath,
          });
        });
      });
    } catch (err) {
      callback(err);
    }
  }

  _removeFile(
    req: Request,
    file: Express.Multer.File,
    callback: (error: Error | null) => void,
  ) {
    callback(null);
  }
}
