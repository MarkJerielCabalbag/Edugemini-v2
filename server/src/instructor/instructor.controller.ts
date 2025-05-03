import {
  Controller,
  Post,
  Body,
  Param,
  ParseIntPipe,
  UseInterceptors,
  UploadedFiles,
  UploadedFile,
} from '@nestjs/common';
import { InstructorService } from './instructor.service';
import { Activity, Announcement, Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('instructor')
export class InstructorController {
  constructor(
    private readonly instructorService: InstructorService,
    private readonly databaseService: DatabaseService,
  ) {}

  //@DESC   Create Classroom related to user
  //@ROUTE  instructor/instructor/createClassroom/:roomId
  @Post('createClassroom/:id')
  createClassroom(
    @Body() createClassroomDto: Prisma.ClassroomCreateInput,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.instructorService.createClassroom(createClassroomDto, +id);
  }

  //@DESC   Create Announcement related to classroom
  //@ROUTE  instructor/createAnnouncement/:userId/:roomId/:title
  @Post('createAnnouncement/:roomId')
  @UseInterceptors(FilesInterceptor('files'))
  async createAnnouncement(
    @Param('roomId', ParseIntPipe) roomId: number,
    @UploadedFiles() files: Express.Multer.File[],
    @Body() announcementDto: Partial<Announcement>,
  ): Promise<void> {
    return this.instructorService.createAnnouncement(
      +roomId,
      files,
      announcementDto,
    );
  }

  //@DESC   Delete Announcement by id
  //@ROUTE  instructor/deleteAnnouncement/:announceId
  @Post('deleteAnnouncement/:announceId')
  async deleteAnnouncement(
    @Param('announceId', ParseIntPipe) announceId: number,
  ): Promise<void> {
    return this.instructorService.deleteAnnouncement(announceId);
  }

  // @DESC   Create Activity that is related to classroom
  // @ROUTE  instructor/createActivity/:roomId
  @Post('createActivity/:roomId')
  @UseInterceptors(FileInterceptor('file'))
  async createActivity(
    @Param('roomId', ParseIntPipe) roomId: number,
    @UploadedFile() file: Express.Multer.File,
    @Body() activityDto: Activity,
  ): Promise<void> {
    return this.instructorService.createActivity(+roomId, activityDto, file);
  }

  // @DESC   Update Activity that is related to both classroom and its own id
  // @ROUTE  instructor/updateActivity/:roomId/:activityId
  @Post('updateActivity/:roomId/:activityId')
  @UseInterceptors(FileInterceptor('file'))
  async updateActivity(
    @Param('roomId', ParseIntPipe) roomId: number,
    @Param('activityId', ParseIntPipe) activityId: number,
    @UploadedFile() file: Express.Multer.File,
    @Body() activityDto: Partial<Activity>,
  ) {
    return this.instructorService.updateActivity(
      +roomId,
      +activityId,
      file,
      activityDto,
    );
  }
}
