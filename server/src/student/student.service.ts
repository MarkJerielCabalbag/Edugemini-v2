import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { Output, Prisma, Student } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';
import { GeminiService } from 'src/gemini/gemini.service';

@Injectable()
export class StudentService {
  constructor(
    private readonly supabase: SupabaseClient,
    private readonly databaseService: DatabaseService,
    private readonly geminiService: GeminiService,
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

    console.log(files);

    if (files) {
      files.forEach(async (file) => {
        const { data, error } = await this.supabase.storage
          .from('edugemini')
          .upload(
            `classroom/${classroom?.classname}/activity/${classwork?.title}/${student?.firstname}/${file.originalname}`,
            file.buffer,
          );
        if (error) {
          throw new HttpException(
            { error: error.message },
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }
        if (data) {
          const output = await this.databaseService.output.create({
            data: {
              relatedToStudent: {
                connect: {
                  userId: userId,
                },
              },

              relatedToClassroom: {
                connect: {
                  id: roomId,
                },
              },

              relatedToActivity: {
                connect: {
                  id: workId,
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
        }
      });
    }

    return new HttpException(
      { message: 'Uploaded successfully' },
      HttpStatus.ACCEPTED,
    );
  }

  //@DECS   Get student files
  //@Route  GET student/getFiles/:roomId/:workId/:userId
  async getFiles(roomId: number, workId: number, userId: number) {
    if (!roomId || !workId || !userId)
      new HttpException({ error: 'Id does not exist' }, HttpStatus.BAD_REQUEST);

    const classroom = await this.databaseService.classroom.findFirst({
      where: { id: roomId },
    });

    const activity = await this.databaseService.activity.findFirst({
      where: { id: workId },
    });

    const user = await this.databaseService.user.findFirst({
      where: { id: userId },
    });

    if (!classroom)
      new HttpException(
        { error: 'Classroom does not exist' },
        HttpStatus.BAD_REQUEST,
      );

    if (!activity)
      new HttpException(
        { error: 'Activity does not exist' },
        HttpStatus.BAD_REQUEST,
      );

    if (!user)
      new HttpException(
        { error: 'User does not exist' },
        HttpStatus.BAD_REQUEST,
      );

    const outputs = await this.databaseService.output.findMany({
      where: {
        AND: {
          roomId: roomId,
          studentId: userId,
          activityId: workId,
        },
      },
      select: {
        id: true,
        relatedToFeedback: {
          select: {
            feedback: true,
          },
        },
        relatedToScore: {
          select: {
            score: true,
          },
        },
      },
    });

    const files = await Promise.all(
      outputs.map((file) =>
        this.databaseService.files.findMany({
          where: { outputId: file?.id },
          include: {
            relatedToOutput: {
              select: {
                relatedToFeedback: {
                  select: {
                    feedback: true,
                  },
                },
                relatedToScore: {
                  select: {
                    score: true,
                  },
                },
              },
            },
          },
        }),
      ),
    );

    return files.flat();
  }

  //@DECS   Remove student files
  //@Route  Post student/removeFile/:outputId
  async removeFiles(outputId: number) {
    if (!outputId)
      new HttpException({ error: 'Id does not exist' }, HttpStatus.BAD_REQUEST);

    const output = await this.databaseService.output.findFirst({
      where: {
        id: outputId,
      },
    });

    if (!output)
      new HttpException(
        { error: 'Out does not exist' },
        HttpStatus.BAD_REQUEST,
      );

    const file = await this.databaseService.files.findFirst({
      where: {
        outputId: outputId,
      },
    });

    const { data, error } = await this.supabase.storage
      .from('edugemini')
      .remove([`${file?.filePath}`]);

    if (data && file) {
      await this.databaseService.output.delete({
        where: {
          id: outputId,
        },
      });
      return new HttpException(
        { message: 'Successfully remove a file' },
        HttpStatus.ACCEPTED,
      );
    }

    if (error) {
      return new HttpException(
        { error: 'Internal Server Error' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  //@DECS   Submits the outputs in relation to the workId
  //@Route  Post student/submit/:workId/:roomId/:studentId
  async submit(
    workId: number,
    roomId: number,
    studentId: number,
    time: string,
    date: string,
  ) {
    if (!workId || !roomId)
      new HttpException({ error: 'Id does not exist' }, HttpStatus.BAD_REQUEST);

    const classroom = await this.databaseService.classroom.findUnique({
      where: { id: roomId },
    });

    const activity = await this.databaseService.activity.findUnique({
      where: { id: workId },
    });

    if (!classroom)
      new HttpException(
        { error: 'Classroom does not exist' },
        HttpStatus.BAD_REQUEST,
      );

    if (!activity)
      new HttpException(
        { error: 'Activity does not exist' },
        HttpStatus.BAD_REQUEST,
      );

    if (!date)
      new HttpException({ error: 'Date is needed' }, HttpStatus.BAD_REQUEST);

    if (!time)
      new HttpException({ error: 'Time is needed' }, HttpStatus.BAD_REQUEST);

    try {
      await this.geminiService.submit(
        'Can you explain the content from just the file uri?',
        studentId,
        workId,
        roomId,
      );
      return new HttpException(
        { message: 'Successfully submitted' },
        HttpStatus.ACCEPTED,
      );
    } catch (error) {
      console.error('Error submitting work:', error);
      throw new HttpException(
        { error: 'Failed to submit work' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  //@DECS   Cancel submition of the outputs in relation to the workId
  //@Route  Post student/cancel/:workId/:roomId/:studentId
  async cancel(workId: number, roomId: number, studentId: number) {
    if (!workId || !roomId || !studentId)
      new HttpException({ error: 'Id does not exist' }, HttpStatus.BAD_REQUEST);

    const classroom = await this.databaseService.classroom.findUnique({
      where: { id: roomId },
    });

    const activity = await this.databaseService.activity.findUnique({
      where: { id: workId },
    });

    const student = await this.databaseService.student.findUnique({
      where: { userId: studentId },
    });

    if (!classroom)
      new HttpException(
        { error: 'Classroom does not exist' },
        HttpStatus.BAD_REQUEST,
      );

    if (!activity)
      new HttpException(
        { error: 'Activity does not exist' },
        HttpStatus.BAD_REQUEST,
      );

    if (!student)
      new HttpException(
        { error: 'Student does not exist' },
        HttpStatus.BAD_REQUEST,
      );

    const output = await this.databaseService.output.findMany({
      where: {
        AND: {
          roomId: roomId,
          studentId: studentId,
          activityId: workId,
        },
      },
    });

    if (!output)
      new HttpException(
        { error: 'Student output does not exist' },
        HttpStatus.BAD_REQUEST,
      );

    try {
      output.forEach(async (output) => {
        const files = await this.databaseService.files.findMany({
          where: { outputId: output.id },
        });

        files.forEach(async (file) => {
          const { data, error } = await this.supabase.storage
            .from(process.env.SUPABASE_BUCKET as string)
            .remove([file.filePath as string]);

          if (data) {
            await this.databaseService.files.deleteMany({
              where: { outputId: output?.id },
            });

            await this.databaseService.output.updateMany({
              where: {
                AND: {
                  roomId: roomId,
                  studentId: studentId,
                  activityId: workId,
                },
              },
              data: {
                status: 'PENDING',
              },
            });

            return {
              message: 'Successfully removed files',
            };
          }
        });
      });
    } catch (error) {
      return error;
    }
  }
}
