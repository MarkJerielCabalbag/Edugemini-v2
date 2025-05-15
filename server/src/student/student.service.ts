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

  //@DESC    Get classrooms enrolled
  //@Route   POST student/classrooms/:userId
  async getClassrooms(userId: number) {
    if (!userId)
      new HttpException({ error: 'Id does not exist' }, HttpStatus.BAD_REQUEST);

    const classroom = await this.databaseService.student.findMany({
      where: {
        userId: userId,
      },
      include: {
        relatedtoClassroom: {
          select: {
            id: true,
            classcode: true,
            classname: true,
          },
        },
      },
    });

    if (!classroom)
      new HttpException(
        { error: 'Cannot find student' },
        HttpStatus.BAD_GATEWAY,
      );

    return classroom;
  }

  //@DESC    Select Files
  //@Route   POST student/selectFiles/:roomId/:workId/:userId
  async selectFiles(
    workId: number,
    roomId: number,
    files: Express.Multer.File[],
    userId: number,
  ) {
    if (!workId || !roomId || !userId)
      new HttpException({ error: 'Id does not exist' }, HttpStatus.BAD_REQUEST);

    const classwork = await this.databaseService.activity.findFirst({
      where: { id: workId },
    });

    const classroom = await this.databaseService.classroom.findFirst({
      where: { id: roomId },
    });

    const student = await this.databaseService.student.findFirst({
      where: { userId: userId },
    });

    if (!classroom)
      new HttpException(
        { error: 'Classroom does not exist' },
        HttpStatus.BAD_REQUEST,
      );

    if (!classwork)
      new HttpException({ error: 'No activity exist' }, HttpStatus.BAD_REQUEST);

    if (!student)
      new HttpException(
        { error: 'Student does not exist' },
        HttpStatus.BAD_REQUEST,
      );

    if (files) {
      files.forEach(async (file) => {
        const mimetype = file.originalname.split('.').pop();
        const { data, error } = await this.supabase.storage
          .from('edugemini')
          .upload(
            `classroom/${classroom?.classname}/activity/${classwork?.title}/${student?.firstname}/${file.originalname}`,
            file.buffer,
          );
        if (data) {
          const output = await this.databaseService.output.create({
            data: {
              relatedToStudent: {
                connect: {
                  userId: userId,
                },
              },
            },
          });
          await this.databaseService.files.create({
            data: {
              filename: file.originalname,
              mimetype: file.mimetype,
              fileSize: file.size,
              filePath: `classroom/${classroom?.classname}/activity/${classwork?.title}/${student?.firstname}/${file.originalname}`,
              folderPath: `classroom/${classroom?.classname}/activity/${classwork?.title}/${student?.firstname}`,

              relatedToOutput: {
                connect: {
                  id: output.id,
                },
              },
            },
          });
        } else {
          return new HttpException(
            { error: 'Server error' },
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }
      });
    }
  }
}
