import {
  Controller,
  Post,
  Body,
  Param,
  ParseIntPipe,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { InstructorService } from './instructor.service';
import { Announcement, Prisma } from 'generated/prisma';
import { diskStorage } from 'multer';
import { DatabaseService } from 'src/database/database.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { mkdirSync } from 'fs';
import { DynamicMulterInterceptor } from 'src/shared/interceptor/dynamic-multer.interceptor';

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

  @Post('createAnnouncement/:roomId/:title')
  @UseInterceptors(
    DynamicMulterInterceptor(async (req, prisma) => {
      const roomId = Number(req.params.roomId);
      const title = req.params.title;
      const classroom = await prisma.classroom.findUnique({
        where: { id: roomId },
      });
      if (!classroom) throw new Error('Classroom not found');

      console.log(title);

      return `uploads/${classroom.classname}/announcements/${title}`;
    }),
  )
  async createAnnouncement(
    @Param('roomId', ParseIntPipe) roomId: number,
    @Param('title') title: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() announcementDto: Partial<Announcement>,
  ): Promise<void> {
    return this.instructorService.createAnnouncement(
      +roomId,
      file,
      announcementDto,
      title,
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
