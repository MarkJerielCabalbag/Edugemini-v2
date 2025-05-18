import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { Output, Student } from 'generated/prisma';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  //@DESC    Join Classroom
  //@Route   POST student/joinClassroom/:userId
  @Post('joinClassroom/:userId')
  async joinClassroom(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() studentDto: Partial<Student>,
    @Body('classcode') classcode: string,
  ) {
    return this.studentService.joinClassroom(userId, studentDto, classcode);
  }

  //@DESC    Get classrooms enrolled
  //@Route   POST student/classrooms/:userId
  @Get('classrooms/:userId')
  async getClassrooms(@Param('userId', ParseIntPipe) userId: number) {
    return this.studentService.getClassrooms(userId);
  }

  //@DESC    Select Files
  //@Route   POST student/selectFiles/:roomId/:workId/:userId
  @Post('selectFiles/:roomId/:workId/:userId')
  @UseInterceptors(FilesInterceptor('files'))
  async selectFiles(
    @Param('roomId', ParseIntPipe) roomId: number,
    @Param('workId', ParseIntPipe) workId: number,
    @Param('userId', ParseIntPipe) userId: number,

    @UploadedFiles() files: Express.Multer.File[],
  ) {
    return this.studentService.selectFiles(workId, roomId, files, userId);
  }

  //@DECS   Get student files
  //@Route  GET student/getFiles/:roomId/:workId/:userId
  @Get('getFiles/:roomId/:workId/:userId')
  async getFiles(
    @Param('roomId', ParseIntPipe) roomId: number,
    @Param('workId', ParseIntPipe) workId: number,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.studentService.getFiles(roomId, workId, userId);
  }

  //@DECS   Remove student files
  //@Route  Post student/removeFile/:outputId
  @Post('removeFile/:outputId')
  async removeFiles(@Param('outputId', ParseIntPipe) outputId: number) {
    return this.studentService.removeFiles(outputId);
  }
}
