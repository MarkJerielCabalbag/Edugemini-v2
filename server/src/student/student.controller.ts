import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from 'generated/prisma';

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
}
