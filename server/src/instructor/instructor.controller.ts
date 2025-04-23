import {
  Controller,
  Post,
  Body,
  Param,
  ParseIntPipe,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { InstructorService } from './instructor.service';
import { Announcement, Prisma } from 'generated/prisma';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage, Multer } from 'multer';
import { Request, Response } from 'express';
import { DatabaseService } from 'src/database/database.service';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';
@Controller('instructor')
export class InstructorController {
  constructor(
    private readonly instructorService: InstructorService,
    private readonly databaseService: DatabaseService,
  ) {}

  @Post('createClassroom/:id')
  createClassroom(
    @Body() createClassroomDto: Prisma.ClassroomCreateInput,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.instructorService.createClassroom(createClassroomDto, +id);
  }

  //@DESC   Create Announcement related to classroom
  //@ROUTE  instructor/createAnnouncement/:roomId

  @Post('createAnnouncement/:roomId')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: (req, file, cb) => {
          const roomId = req.params.roomId;

          const uploadPath = join(
            process.cwd(),
            'uploads',
            `classroom_${roomId}`,
          );

          if (!existsSync(uploadPath)) {
            mkdirSync(uploadPath, { recursive: true });
          }

          cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
          cb(null, `${Date.now()}-${file.originalname}`);
        },
      }),
    }),
  )
  createAnnouncement(
    @Param('roomId', ParseIntPipe) roomId: number,
    @UploadedFiles() files: Express.Multer.File,
    @Body() announcementDto: Partial<Announcement>,
  ): Promise<void> {
    return this.instructorService.createAnnouncement(
      +roomId,
      files,
      announcementDto,
    );
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.instructorService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateInstructorDto: UpdateInstructorDto,
  // ) {
  //   return this.instructorService.update(+id, updateInstructorDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.instructorService.remove(+id);
  // }
}
