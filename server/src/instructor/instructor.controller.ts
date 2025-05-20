import {
  Controller,
  Post,
  Body,
  Param,
  ParseIntPipe,
  UseInterceptors,
  UploadedFiles,
  UploadedFile,
  Get,
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
  //@ROUTE  instructor/instructor/createClassroom/:userId
  @Post('createClassroom/:userId')
  createClassroom(
    @Body() createClassroomDto: Prisma.ClassroomCreateInput,
    @Param('userId', ParseIntPipe) id: number,
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

  // @DESC   Remove Activity that is related to both classroom and its own id
  // @ROUTE  instructor/removeActivity/:roomId/:activityId
  @Post('removeActivity/:roomId/:activityId')
  async removeActivity(
    @Param('roomId', ParseIntPipe) roomId: number,
    @Param('activityId', ParseIntPipe) activityId: number,
  ) {
    return this.instructorService.removeActivity(+roomId, +activityId);
  }

  // @DESC   Get Announcements that is related to both classroom and its user
  // @ROUTE  instructor/getAnnouncements/:roomId
  @Get('getAnnouncements/:roomId')
  async getAnnouncements(
    @Param('roomId', ParseIntPipe) roomId: number,
  ): Promise<Announcement[]> {
    return this.instructorService.getAnnouncements(+roomId);
  }

  // @DESC   Get Announcement that is related to both classroom and its user
  // @ROUTE  instructor/getAnnouncement/:announceId
  @Get('getAnnouncement/:announceId')
  async getAnnouncement(
    @Param('announceId', ParseIntPipe) announceId: number,
  ): Promise<Announcement> {
    return this.instructorService.getAnnouncement(+announceId);
  }

  // @DESC   Get Activities that is related to classroom
  // @ROUTE  instructor/getActivities/:roomId
  @Get('getActivities/:roomId')
  async getActivities(
    @Param('roomId', ParseIntPipe) roomId: number,
  ): Promise<Activity[]> {
    return this.instructorService.getActivities(+roomId);
  }

  // @DESC   Get Activity
  // @ROUTE  instructor/getActivity/:activityId
  @Get('getActivity/:activityId')
  async getActivity(
    @Param('activityId', ParseIntPipe) activityId: number,
  ): Promise<Activity> {
    return this.instructorService.getActivity(+activityId);
  }

  // @DESC   Approved student to join specific classroom
  // @ROUTE  instructor/approvedStudent/:userId
  @Post('approvedStudent/:userId/:roomId')
  async approvedStudent(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('roomId', ParseIntPipe) roomId: number,
  ) {
    return this.instructorService.approvedStudent(+userId, +roomId);
  }

  // @DESC   Declined student to join specific classroom
  // @ROUTE  instructor/declinedStudent/:userId
  @Post('declinedStudent/:userId/:roomId')
  async declinedStudent(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('roomId', ParseIntPipe) roomId: number,
  ) {
    return this.instructorService.declinedStudent(+userId, +roomId);
  }

  // @DESC   Get students associated with the classroom
  // @ROUTE  instructor/students/:roomId
  @Get('students/:roomId')
  async getStudents(@Param('roomId', ParseIntPipe) roomId: number) {
    return this.instructorService.getStudents(roomId);
  }

  // @DESC   Get student
  // @ROUTE  instructor/student/:userId
  @Get('student/:userId')
  async getStudent(@Param('userId', ParseIntPipe) userId: number) {
    return this.instructorService.getStudent(userId);
  }

  // @DESC   Get classes associated with the userId
  // @ROUTE  instructor/classes/:userId
  @Get('classes/:userId')
  async getClasses(@Param('userId', ParseIntPipe) userId: number) {
    return this.instructorService.getClasses(userId);
  }

  // @DESC   Get class
  // @ROUTE  instructor/class/:roomId
  @Get('class/:roomId')
  async getClass(@Param('roomId', ParseIntPipe) roomId: number) {
    return this.instructorService.getClass(roomId);
  }

  // @DESC   Get the list of students who join the class by room id
  // @ROUTE  instructor/people/:roomId
  @Get('people/:roomId')
  async getPeople(@Param('roomId', ParseIntPipe) roomId: number) {
    return this.instructorService.getPeople(roomId);
  }

  // @DESC   Get the list of students by roomId and workId
  // @ROUTE  instructor/view/student/activity/:roomId/:workId
  @Get('view/student/activity/:roomId/:workId')
  async getStudentActivityStatus(
    @Param('roomId', ParseIntPipe) roomId: number,
    @Param('workId', ParseIntPipe) workId: number,
  ) {
    return this.instructorService.getStudentActivityStatus(roomId, workId);
  }

  // @DESC   Get student info by classroom id
  // @ROUTE  instructor/getStudentInfo/:roomId/:studentId
  @Get('getStudentInfo/:roomId/:studentId')
  async getStudentInfo(
    @Param('roomId', ParseIntPipe) roomId: number,
    @Param('studentId', ParseIntPipe) studentId: number,
  ) {
    return this.instructorService.getStudentInfo(roomId, studentId);
  }
}
