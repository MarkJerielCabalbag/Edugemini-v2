import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { Student } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class StudentService {
  constructor(
    private readonly supabase: SupabaseClient,
    private readonly databaseService: DatabaseService,
  ) {}

  //@DESC    Join Classroom
  //@Route   POST student/joinClassroom/:userId
  async joinClassroom(
    userId: number,
    studentDto: Partial<Student>,
    classcode: string,
  ) {
    if (!userId)
      new HttpException({ error: 'Id does not exist' }, HttpStatus.BAD_REQUEST);

    if (!classcode)
      new HttpException(
        { error: 'Classcode is required' },
        HttpStatus.BAD_REQUEST,
      );

    if (
      !studentDto.firstname ||
      !studentDto.lastname ||
      !studentDto.middlename ||
      !studentDto.sex ||
      !classcode
    )
      new HttpException(
        { error: 'All fields are required' },
        HttpStatus.BAD_REQUEST,
      );

    const classroom = await this.databaseService.classroom.findFirst({
      where: {
        classcode: classcode,
      },
    });

    if (!classroom) {
      throw new HttpException(
        { error: 'The classroom does not exist' },
        HttpStatus.BAD_REQUEST,
      );
    }

    const studentExist = await this.databaseService.student.findFirst({
      where: {
        roomId: classroom.id,
        AND: [
          {
            userId: userId,
          },
        ],
      },
    });

    if (studentExist) {
      throw new HttpException(
        { error: 'You already joined the classroom' },
        HttpStatus.BAD_REQUEST,
      );
    } else {
      await this.databaseService.student.create({
        data: {
          firstname: studentDto.firstname ?? '',
          lastname: studentDto.lastname ?? '',
          middlename: studentDto.middlename ?? '',
          sex: studentDto.sex ?? '',
          relatedToUser: {
            connect: { id: userId },
          },
          relatedtoClassroom: {
            connect: { id: classroom.id },
          },
        },
      });
    }

    throw new HttpException(
      { message: 'You request to join is pending' },
      HttpStatus.ACCEPTED,
    );
  }
}
