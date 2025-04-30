import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Type, Injectable, mixin } from '@nestjs/common';
import { diskStorage } from 'multer';

import { existsSync, mkdirSync } from 'fs';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { PrismaClient } from 'generated/prisma';

type StoragePathCallback = (req: any, prisma: PrismaClient) => Promise<string>;

export function DynamicMulterInterceptorFactory(
  fieldName: string,
  isMultiple = false,
  getPath: StoragePathCallback,
): Type<any> {
  @Injectable()
  class MixinMulterInterceptor {
    private readonly prisma = new PrismaClient();

    async intercept(context: any, next: any) {
      const req = context.switchToHttp().getRequest();
      const destination = await getPath(req, this.prisma);

      if (!existsSync(destination)) {
        mkdirSync(destination, { recursive: true });
      }

      const multerOptions: MulterOptions = {
        storage: diskStorage({
          destination,
          filename: (_req, file, cb) => {
            // const timestamp = Date.now();
            // const random = Math.round(Math.random() * 1e9);
            // const ext = file.originalname.substring(
            //   file.originalname.lastIndexOf('.'),
            // );
            // const base = file.originalname.substring(
            //   0,
            //   file.originalname.lastIndexOf('.'),
            // );

            // const uniqueName = `${random} - ${file.originalname}`;
            cb(null, file.originalname);
          },
        }),
      };

      const Interceptor = isMultiple
        ? FilesInterceptor(fieldName, undefined, multerOptions)
        : FileInterceptor(fieldName, multerOptions);

      const instance = new Interceptor();

      req.uploadPath = destination;

      return instance.intercept(context, next);
    }
  }
  return mixin(MixinMulterInterceptor);
}
