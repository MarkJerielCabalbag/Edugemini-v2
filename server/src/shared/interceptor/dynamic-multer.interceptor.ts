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
          filename: (_req, file, cb) => cb(null, file.originalname),
        }),
      };

      const Interceptor = isMultiple
        ? FilesInterceptor(fieldName, undefined, multerOptions)
        : FileInterceptor(fieldName, multerOptions);

      const instance = new Interceptor();
      return instance.intercept(context, next);
    }
  }

  return mixin(MixinMulterInterceptor);
}
