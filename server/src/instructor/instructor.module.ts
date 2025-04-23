import { Module } from '@nestjs/common';
import { InstructorService } from './instructor.service';
import { InstructorController } from './instructor.controller';
import { DatabaseModule } from 'src/database/database.module';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join } from 'path';

const FILE_UPLOAD_DIR = join(process.cwd(), 'src', 'uploads');

@Module({
  imports: [
    DatabaseModule,
    MulterModule.register({
      storage: diskStorage({
        destination: FILE_UPLOAD_DIR,
      }),
    }),
  ],
  controllers: [InstructorController],
  providers: [InstructorService],
})
export class InstructorModule {}
