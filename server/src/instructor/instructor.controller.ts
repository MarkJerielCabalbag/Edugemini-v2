import {
  Controller,
  Post,
  Body,
  Param,
  ParseIntPipe,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
} from '@nestjs/common';
import { InstructorService } from './instructor.service';
import { Activity, Announcement, Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';
import { DynamicMulterInterceptorFactory } from 'src/shared/interceptor/dynamic-multer.interceptor';

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
  //@ROUTE  instructor/createAnnouncement/:roomId/:title
  @Post('createAnnouncement/:roomId/:title')
  @UseInterceptors(
    DynamicMulterInterceptorFactory('files', true, async (req, prisma) => {
      const roomId = Number(req.params.roomId);
      const title = req.params.title;

      const classroom = await prisma.classroom.findUnique({
        where: { id: roomId },
      });

      if (!classroom) throw new Error('Classroom not found');

      return `uploads/${classroom.classname}/announcements/${title}`;
    }),
  )
  async createAnnouncement(
    @Param('roomId', ParseIntPipe) roomId: number,
    @Param('title') title: string,
    @UploadedFiles() files: Express.Multer.File[],
    @Body() announcementDto: Partial<Announcement>,
  ): Promise<void> {
    console.log(files);
    return this.instructorService.createAnnouncement(
      +roomId,
      files,
      announcementDto,
      title,
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

  //@DESC   Create Activity that is related to classroom
  //@ROUTE  instructor/createActivity/:roomId/title
  @Post('createActivity/:roomId/:title')
  @UseInterceptors(
    DynamicMulterInterceptorFactory('file', false, async (req, prisma) => {
      const { roomId, title } = req.params;

      const classroom = await prisma.classroom.findUnique({
        where: { id: Number(roomId) },
      });

      if (!classroom) throw new Error('Classroom not found');

      return `uploads/${classroom.classname}/activities/${title}/instruction`;
    }),
  )
  async createActivity(
    @Param('roomId', ParseIntPipe) roomId: number,
    @Param('title') title: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() activityDto: Partial<Activity>,
  ): Promise<void> {
    return this.instructorService.createActivity(
      +roomId,
      title,
      activityDto,
      file,
    );
  }

  //@DESC   Update Activity that is related to both classroom and its own id
  //@ROUTE  instructor/updateActivity/:roomId/:activityId
  @Post('updateActivity/:roomId/:activityId')
  @UseInterceptors(
    DynamicMulterInterceptorFactory('file', false, async (req, prisma) => {
      const { roomId, activityId } = req.params;

      const classroom = await prisma.classroom.findUnique({
        where: { id: Number(roomId) },
      });

      const activity = await prisma.activity.findUnique({
        where: { id: Number(activityId) },
      });

      const file = await prisma.files.findFirst({
        where: {
          relatedToActivity: {
            id: Number(activityId),
          },
        },
      });
      console.log('activity', activity);
      console.log('file', file);

      if (!classroom) throw new Error('Classroom not found');

      return `uploads/${classroom.classname}/activities/${activity?.title}/instruction`;
    }),
  )
  async updateActivity(
    @Param('roomId', ParseIntPipe) roomId: number,
    @Param('activityId', ParseIntPipe) activityId: number,
    @UploadedFile() file: Express.Multer.File,
    @Body() activityDto: Partial<Activity>,
    @Body('oldFilePath') oldFilePath: string,
  ) {
    console.log(file.destination);
    return this.instructorService.updateActivity(
      roomId,
      activityId,
      file,
      activityDto,
      oldFilePath,
    );
  }
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
