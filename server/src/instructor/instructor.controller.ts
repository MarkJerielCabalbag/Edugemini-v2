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
import { Activity, Announcement, Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';
import { DynamicMulterInterceptor } from 'src/shared/interceptor/dynamic-multer.interceptor';

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
  async createActivity(
    @Param('roomId', ParseIntPipe) roomId: number,
    @Param('title') title: string,
    @Body() activityDto: Partial<Activity>,
  ): Promise<void> {
    return this.instructorService.createActivity(+roomId, title, activityDto);
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
