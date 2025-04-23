// src/shared/interceptors/dynamic-multer.interceptor.ts
import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
  mixin,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import * as multer from 'multer';
import { mkdirSync, existsSync } from 'fs';
import { DatabaseService } from 'src/database/database.service';

export function DynamicMulterInterceptor(
  buildPath: (req: any, prisma: DatabaseService) => Promise<string>,
): any {
  @Injectable()
  class MixinMulterInterceptor implements NestInterceptor {
    constructor(private readonly prisma: DatabaseService) {}

    async intercept(
      context: ExecutionContext,
      next: CallHandler,
    ): Promise<Observable<any>> {
      const req = context.switchToHttp().getRequest();

      const uploadPath = await buildPath(req, this.prisma);

      if (!existsSync(uploadPath)) {
        mkdirSync(uploadPath, { recursive: true });
      }

      const storage = multer.diskStorage({
        destination: (_req, _file, cb) => cb(null, uploadPath),
        filename: (_req, file, cb) => cb(null, file.originalname),
      });

      const upload = multer({ storage }).single('file');

      await new Promise((resolve, reject) => {
        upload(req, req.res, (err: any) => {
          if (err) reject(err);
          else resolve(true);
        });
      });

      return next.handle();
    }
  }

  return mixin(MixinMulterInterceptor);
}
