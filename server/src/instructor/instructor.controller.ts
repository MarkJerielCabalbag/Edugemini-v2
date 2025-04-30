import {
  Controller,
  Post,
  Body,
  Param,
  ParseIntPipe,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
  HttpException,
  HttpStatus,
  Req,
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
  //@ROUTE  instructor/createAnnouncement/:userId/:roomId/:title
  @Post('createAnnouncement/:userId/:roomId/:title')
  @UseInterceptors(
    DynamicMulterInterceptorFactory('files', true, async (req, prisma) => {
      const { userId, roomId, title } = req.params;

      const user = await prisma.user.findUnique({ where: { id: +userId } });
      const classroom = await prisma.classroom.findUnique({
        where: { id: +roomId },
      });

      const existingAnnouncement = await prisma.announcement.findFirst({
        where: {
          roomId: +roomId,
          title: title,
        },
      });

      if (existingAnnouncement) {
        throw new HttpException(
          { error: 'Announcement already exists' },
          HttpStatus.BAD_REQUEST,
        );
      }
      return `uploads/${user?.username}/announcements/${classroom?.classname}`;
    }),
  )
  async createAnnouncement(
    @Param('roomId', ParseIntPipe) roomId: number,
    @Param('userId', ParseIntPipe) userId: number,
    @Param('title') title: string,
    @UploadedFiles() files: Express.Multer.File[],
    @Body() announcementDto: Partial<Announcement>,
  ): Promise<void> {
    return this.instructorService.createAnnouncement(
      +roomId,
      +userId,
      title,
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

  //@DESC   Create Activity that is related to classroom
  //@ROUTE  instructor/createActivity/:roomId
  // @Post('createActivity/:roomId/:title')
  // @UseInterceptors(
  //   DynamicMulterInterceptorFactory('file', false, async (req) => {
  //     const { roomId, title } = req.params;
  //     const uploadpath = await
  //   }),
  // )
  // async createActivity(
  //   @Param('roomId', ParseIntPipe) roomId: number,
  //   @Param('title') title: string,
  //   @UploadedFile() file: Express.Multer.File,
  //   @Body() activityDto: Partial<Activity>,
  // ): Promise<void> {
  //   return this.instructorService.createActivity(
  //     +roomId,
  //     title,
  //     activityDto,
  //     file,
  //   );
  // }

  //@DESC   Update Activity that is related to both classroom and its own id
  //@ROUTE  instructor/updateActivity/:roomId/:activityId
  //   @Post('updateActivity/:roomId/:activityId')
  //   @UseInterceptors(
  //     DynamicMulterInterceptorFactory('file', false, async (req, prisma) => {
  //       const { roomId, activityId } = req.params;
  //     }),
  //   )
  //   async updateActivity(
  //     @Param('roomId', ParseIntPipe) roomId: number,
  //     @Param('activityId', ParseIntPipe) activityId: number,
  //     @UploadedFile() file: Express.Multer.File,
  //     @Body() activityDto: Partial<Activity>,
  //     @Req() req: string,
  //   ) {
  //     return this.instructorService.updateActivity(
  //       roomId,
  //       activityId,
  //       file,
  //       activityDto,
  //     );
  //   }
  //
}
