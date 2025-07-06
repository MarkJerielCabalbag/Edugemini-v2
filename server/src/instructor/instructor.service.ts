import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Activity, Announcement, Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';
import { SupabaseClient } from '@supabase/supabase-js';
import { map } from 'rxjs';

@Injectable()
export class InstructorService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly supabase: SupabaseClient,
  ) {}

  //@DESC   Create Classroom related to user
  //@ROUTE  instructor/instructor/createClassroom/:roomId
  async createClassroom(
    createClassroomDto: Prisma.ClassroomCreateInput,

    id: number,
  ) {
    if (
      !createClassroomDto.classname ||
      !createClassroomDto.subject ||
      !createClassroomDto.section ||
      !createClassroomDto.room
    ) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: 'Please fill all fields',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const isClassroomExist = await this.databaseService.classroom.findFirst({
      where: {
        classname: createClassroomDto.classname,
        relatedToUser: {
          id,
        },
      },
    });

    if (isClassroomExist) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          message: 'Classroom already exists',
        },
        HttpStatus.CONFLICT,
      );
    }

    const newClassroom = await this.databaseService.classroom.create({
      data: {
        ...createClassroomDto,
        relatedToUser: {
          connect: {
            id,
          },
        },
      },
    });

    throw new HttpException(
      {
        status: HttpStatus.CREATED,
        message: `${newClassroom.classname} is successfully created`,
        data: newClassroom,
      },
      HttpStatus.CREATED,
    );
  }

  //@DESC   Create Announcement related to classroom
  //@ROUTE  instructor/createAnnouncement/:userId/:roomId/:title
  async createAnnouncement(
    roomId: number,
    files: Express.Multer.File[],
    announcementDto: Partial<Announcement>,
  ) {
    if (!roomId) {
      throw new HttpException(
        {
          error: 'Classroom ID does not exist',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const isClassroomExist = await this.databaseService.classroom.findFirst({
      where: { id: roomId },
    });

    const isAnnoucementExist =
      await this.databaseService.announcement.findFirst({
        where: {
          title: announcementDto.title,
          relatedToClassroom: {
            id: roomId,
          },
        },
      });

    if (isAnnoucementExist) {
      throw new HttpException(
        {
          error: `The title ${isAnnoucementExist.title} is already exist`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const newAnnouncement = await this.databaseService.announcement.create({
      data: {
        title: announcementDto?.title ?? '',
        description: announcementDto.description,
        relatedToClassroom: {
          connect: {
            id: roomId,
          },
        },
        createdAt: new Date(),
      },
    });

    console.log(files, 'files');

    files.forEach(async (file) => {
      const mimetype = file.originalname.split('.').pop();
      const { data, error } = await this.supabase.storage
        .from('edugemini')
        .upload(
          `classroom/${isClassroomExist?.classname}/announcement/${newAnnouncement.title}/${file.originalname}`,
          file.buffer,
        );
      if (data) {
        const { data } = await this.supabase.storage
          .from(process.env.SUPABASE_BUCKET as string)
          .getPublicUrl(
            `classroom/${isClassroomExist?.classname}/announcement/${newAnnouncement.title}/${file.originalname}`,
          );
        return await this.databaseService.files.create({
          data: {
            filename: file.originalname,
            mimetype: mimetype ?? '',
            fileSize: file.size,
            folderPath: `classroom/${isClassroomExist?.classname}/announcement/${newAnnouncement.title}`,
            filePath: `classroom/${isClassroomExist?.classname}/announcement/${newAnnouncement.title}/${file.originalname}`,
            relatedToAnnouncement: {
              connect: {
                id: newAnnouncement.id,
              },
            },
            publicFileUrl: data.publicUrl,
          },
        });
      } else {
        console.error('Error uploading file:', error);
        throw new HttpException(
          {
            error: 'Failed to upload file',
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    });

    throw new HttpException(
      {
        message: `The new announcement title: ${newAnnouncement.title} successfully created`,
      },
      HttpStatus.CREATED,
    );
  }

  //@DESC   Delete Announcement by id
  //@ROUTE  instructor/deleteAnnouncement/:announceId
  async deleteAnnouncement(announceId: number): Promise<void> {
    if (!announceId) {
      throw new HttpException(
        {
          error: 'The id does not exist',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const isAnnouncementExist =
      await this.databaseService.announcement.findFirst({
        where: {
          id: announceId,
        },
      });

    if (!isAnnouncementExist) {
      throw new HttpException(
        {
          error: 'The announcement does not exist',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const filesToDelete = await this.databaseService.files.findMany({
      where: {
        relatedToAnnouncement: {
          id: isAnnouncementExist.id,
        },
      },
    });

    // Delete all files from storage first
    const deletePromises = filesToDelete.map(async (file) => {
      if (file.filePath) {
        const { data, error } = await this.supabase.storage
          .from('edugemini')
          .remove([file.filePath]);

        if (error) {
          throw new HttpException(
            {
              error: `Failed to delete file: ${file.filename}`,
            },
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }
      }
    });

    // Wait for all file deletions to complete
    await Promise.all(deletePromises);

    // Then delete the announcement and its related files
    await this.databaseService.announcement.delete({
      where: { id: announceId },
    });

    throw new HttpException(
      {
        message: 'Announcement Deleted Successfully',
      },
      HttpStatus.ACCEPTED,
    );
  }

  //@DESC   Create Activity that is related to classroom
  //@ROUTE  instructor/createActivity/:roomId/title
  async createActivity(
    roomId: number,
    activityDto: Activity,
    file: Express.Multer.File,
  ): Promise<void> {
    if (!file) {
      throw new HttpException(
        {
          error: 'Please upload an instruction file',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!roomId) {
      throw new HttpException(
        {
          error: 'The id does not exist',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const isActivityExist = await this.databaseService.activity.findFirst({
      where: {
        title: activityDto.title,
        relatedToClassroom: {
          id: roomId,
        },
      },
    });

    const isClassroomExist = await this.databaseService.classroom.findFirst({
      where: {
        id: roomId,
      },
    });

    if (isActivityExist?.title === activityDto.title) {
      throw new HttpException(
        {
          error: 'Activity title already exist',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    function formatToStandardTime(time: string) {
      const [hours, minutes] = time.split(':').map(Number);
      const period = hours >= 12 ? 'PM' : 'AM';
      const standardHours = hours % 12 || 12; // Convert 0 or 12 to 12 for standard time
      return `${standardHours}:${minutes.toString().padStart(2, '0')} ${period}`;
    }

    const formatedTime = formatToStandardTime(activityDto.time);
    console.log('fresh data', activityDto.time);
    console.log('formated time', formatedTime);
    //activity details
    const newActivity = await this.databaseService.activity.create({
      data: {
        title: activityDto.title,
        date: activityDto.date,
        time: formatedTime,
        instruction: activityDto.instruction,
        relatedToClassroom: {
          connect: {
            id: roomId,
          },
        },
      },
    });

    const { data, error } = await this.supabase.storage
      .from('edugemini')
      .upload(
        `classroom/${isClassroomExist?.classname}/activity/${newActivity.title}/${file.originalname}`,
        file.buffer,
      );

    if (data) {
      const { data } = await this.supabase.storage
        .from('edugemini')
        .getPublicUrl(
          `classroom/${isClassroomExist?.classname}/activity/${newActivity.title}/${file.originalname}`,
        );
      await this.databaseService.files.create({
        data: {
          filename: file.originalname,
          mimetype: file.mimetype,
          fileSize: file.size,
          folderPath: `classroom/${isClassroomExist?.classname}/activity/${newActivity.title}`,
          filePath: `classroom/${isClassroomExist?.classname}/activity/${newActivity.title}/${file.originalname}`,
          relatedToActivity: {
            connect: {
              id: newActivity.id,
            },
          },
          publicFileUrl: data.publicUrl,
        },
      });
    } else {
      throw new HttpException(
        { error: error.message },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    throw new HttpException(
      {
        message: `The new activity: ${newActivity?.title} successfully created`,
      },
      HttpStatus.CREATED,
    );
  }

  //@DESC   Update Activity that is related to both classroom and its own id
  //@ROUTE  instructor/updateActivity/:roomId/:activityId
  async updateActivity(
    roomId: number,
    activityId: number,
    file?: Express.Multer.File,
    activityDto?: Partial<Activity>,
  ) {
    const classroom = await this.databaseService.classroom.findFirst({
      where: { id: roomId },
    });

    if (!classroom) {
      throw new HttpException(
        { error: 'Classroom does not exist' },
        HttpStatus.BAD_REQUEST,
      );
    }

    const activity = await this.databaseService.activity.findFirst({
      where: {
        id: activityId,
        relatedToClassroom: { id: roomId },
      },
    });

    if (!activity) {
      throw new HttpException(
        { error: 'Activity does not exist' },
        HttpStatus.BAD_REQUEST,
      );
    }

    if (activityDto?.title) {
      const existingActivity = await this.databaseService.activity.findFirst({
        where: {
          roomId: roomId,
          title: activityDto.title,
          id: { not: activityId },
        },
      });

      if (existingActivity) {
        throw new HttpException(
          { error: 'Activity title already exist' },
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    const updateData: Partial<Activity> = {};
    if (activityDto?.title) updateData.title = activityDto.title;
    if (activityDto?.time) updateData.time = activityDto.time;
    if (activityDto?.date) updateData.date = activityDto.date;
    if (activityDto?.instruction)
      updateData.instruction = activityDto.instruction;

    const updatedActivity = await this.databaseService.activity.update({
      where: { id: activityId },
      data: updateData,
    });

    if (file) {
      const currentFile = await this.databaseService.files.findFirst({
        where: { activityId: activityId },
      });

      if (currentFile?.filePath) {
        await this.supabase.storage
          .from('edugemini')
          .remove([currentFile.filePath]);
      }

      const { data, error } = await this.supabase.storage
        .from('edugemini')
        .upload(
          `classroom/${classroom?.classname}/activity/${updatedActivity.title}/${file.originalname}`,
          file.buffer,
        );

      if (error) {
        throw new HttpException(
          { error: error.message },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      if (currentFile) {
        const { data } = await this.supabase.storage
          .from('edugemini')
          .getPublicUrl(
            `classroom/${classroom?.classname}/activity/${updatedActivity.title}/${file.originalname}`,
          );
        await this.databaseService.files.update({
          where: { id: currentFile.id },
          data: {
            filename: file.originalname,
            fileSize: file.size,
            mimetype: file.mimetype,
            filePath: `classroom/${classroom?.classname}/activity/${updatedActivity.title}/${file.originalname}`,
            folderPath: `classroom/${classroom?.classname}/activity/${updatedActivity.title}`,
            publicFileUrl: data.publicUrl,
          },
        });
      }
    }

    throw new HttpException(
      { message: 'Successfully Updated' },
      HttpStatus.ACCEPTED,
    );
  }

  // @DESC   Remove Activity that is related to both classroom and its own id
  // @ROUTE  instructor/removeActivity/:roomId/:activityId
  async removeActivity(roomId: number, activityId: number) {
    if (!roomId || !activityId) {
      throw new HttpException(
        { error: 'Id does not exist' },
        HttpStatus.BAD_REQUEST,
      );
    }

    const classroom = await this.databaseService.classroom.findFirst({
      where: {
        id: roomId,
      },
    });

    const activity = await this.databaseService.activity.findFirst({
      where: {
        id: activityId,
      },
    });

    if (!classroom) {
      throw new HttpException(
        { error: 'Classroom does not exist' },
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!activity) {
      throw new HttpException(
        { error: 'Activity does not exist' },
        HttpStatus.BAD_REQUEST,
      );
    }

    //find the file related to the activity
    const file = await this.databaseService.files.findFirst({
      where: {
        relatedToActivity: {
          id: activityId,
        },
      },
    });

    if (file?.filePath) {
      const { data, error } = await this.supabase.storage
        .from('edugemini')
        .remove([file?.filePath]);

      if (data) {
        await this.databaseService.activity.delete({
          where: {
            id: activityId,
          },
        });
        throw new HttpException(
          { message: 'Activity Deleted Successfully' },
          HttpStatus.ACCEPTED,
        );
      } else {
        throw new HttpException(
          { error: error.message },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  // @DESC   Get Announcements that is related to both classroom and its user
  // @ROUTE  instructor/getAnnouncements/:roomId
  async getAnnouncements(roomId: number): Promise<Announcement[]> {
    if (!roomId)
      new HttpException({ error: 'Id does not exist' }, HttpStatus.BAD_REQUEST);

    const classroom = await this.databaseService.classroom.findFirst({
      where: { id: roomId },
    });

    if (!classroom)
      new HttpException(
        { error: 'Classroomdoes not exist' },
        HttpStatus.BAD_REQUEST,
      );

    const announcements = await this.databaseService.announcement.findMany({
      where: {
        relatedToClassroom: {
          id: roomId,
        },
      },
      include: {
        listOfFiles: true,
      },
    });

    return announcements;
  }

  // @DESC   Get Announcement that is related to both classroom and its user
  // @ROUTE  instructor/getAnnouncement/:roomId
  async getAnnouncement(announceId: number): Promise<Announcement> {
    if (!announceId)
      new HttpException({ error: 'Id does not exist' }, HttpStatus.BAD_REQUEST);

    const announcement = await this.databaseService.announcement.findFirst({
      where: {
        id: announceId,
      },
      include: {
        listOfFiles: true,
      },
    });

    if (!announcement) {
      throw new HttpException(
        { error: 'Announcement does not exist' },
        HttpStatus.BAD_GATEWAY,
      );
    }

    return announcement;
  }

  // @DESC   Get Activities that is related to classroom
  // @ROUTE  instructor/getActivities/:roomId
  async getActivities(roomId: number): Promise<Activity[]> {
    if (!roomId)
      new HttpException({ error: 'Id does not exist' }, HttpStatus.BAD_GATEWAY);

    const classworks = await this.databaseService.activity.findMany({
      where: {
        roomId: roomId,
      },
    });

    if (!classworks) {
      throw new HttpException(
        { error: 'Classworks does not exist' },
        HttpStatus.BAD_GATEWAY,
      );
    }

    return classworks;
  }

  // @DESC   Get Classwork that is related to classroom
  // @ROUTE  instructor/getClasswork/:roomId
  async getActivity(activityId: number): Promise<Activity> {
    if (!activityId)
      new HttpException({ error: 'Id does not exist' }, HttpStatus.BAD_REQUEST);

    const activity = await this.databaseService.activity.findFirst({
      where: {
        id: activityId,
      },
      include: {
        criteria: true,
      },
    });

    if (!activity) {
      throw new HttpException(
        { error: 'Activity does not exist' },
        HttpStatus.BAD_REQUEST,
      );
    }

    return activity;
  }

  // @DESC   Approved student to join specific classroom
  // @ROUTE  instructor/approvedStudent/:userId
  async approvedStudent(userId: number, roomId: number) {
    if (!userId || !roomId)
      new HttpException(
        { error: 'The Id does not exist' },
        HttpStatus.BAD_REQUEST,
      );

    const student = await this.databaseService.student.findFirst({
      where: {
        userId: userId,
      },
    });
    const classroom = await this.databaseService.classroom.findUnique({
      where: { id: roomId },
    });

    if (!classroom) {
      throw new HttpException(
        { error: 'Classroom does not exist' },
        HttpStatus.BAD_GATEWAY,
      );
    }

    if (!student) {
      throw new HttpException(
        { error: 'Student does not exist' },
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.databaseService.student.update({
      where: {
        userId: userId,
        AND: {
          roomId: roomId,
        },
      },

      data: {
        status: 'APPROVED',
      },
    });

    throw new HttpException(
      { message: 'Approved Student' },
      HttpStatus.ACCEPTED,
    );
  }

  // @DESC   Declined student to join specific classroom
  // @ROUTE  instructor/declinedStudent/:userId
  async declinedStudent(userId: number, roomId: number) {
    if (!userId || !roomId)
      new HttpException(
        { error: 'The Id does not exist' },
        HttpStatus.BAD_REQUEST,
      );

    const classroom = await this.databaseService.classroom.findUnique({
      where: { id: roomId },
    });

    if (!classroom) {
      throw new HttpException(
        { error: 'Classroom does not exist' },
        HttpStatus.BAD_GATEWAY,
      );
    }

    const student = await this.databaseService.student.findFirst({
      where: {
        userId: userId,
      },
    });

    if (!student) {
      throw new HttpException(
        { error: 'Student does not exist' },
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.databaseService.student.update({
      where: {
        userId: userId,
        AND: {
          roomId: roomId,
        },
      },
      data: {
        status: 'DECLINED',
      },
    });

    throw new HttpException(
      { message: 'Declined Student' },
      HttpStatus.ACCEPTED,
    );
  }

  // @DESC   Get students associated with the classroom
  // @ROUTE  instructor/students/:roomId
  async getStudents(roomId: number) {
    if (!roomId)
      new HttpException({ error: 'Id does not exist' }, HttpStatus.BAD_GATEWAY);

    const classroom = await this.databaseService.classroom.findFirst({
      where: {
        id: roomId,
      },
      select: {
        listOfStudents: true,
      },
    });

    if (!classroom) {
      throw new HttpException(
        { error: 'Classroom does not exist' },
        HttpStatus.BAD_REQUEST,
      );
    }

    return classroom.listOfStudents;
  }

  // @DESC   Get student
  // @ROUTE  instructor/student/:userId
  async getStudent(userId: number) {
    if (!userId)
      new HttpException({ error: 'Id does not exist' }, HttpStatus.BAD_REQUEST);

    const student = await this.databaseService.student.findFirst({
      where: {
        userId: userId,
      },
    });

    if (!student) {
      throw new HttpException(
        { error: 'Student does not exist' },
        HttpStatus.BAD_REQUEST,
      );
    }

    return student;
  }

  // @DESC   Get classes associated with the userId
  // @ROUTE  instructor/classes/:userId
  async getClasses(userId: number) {
    if (!userId)
      new HttpException({ error: 'Id does not exist' }, HttpStatus.BAD_REQUEST);

    const user = await this.databaseService.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!user)
      new HttpException(
        { error: 'User does not exist' },
        HttpStatus.BAD_GATEWAY,
      );

    const classrooms = await this.databaseService.classroom.findMany({
      where: {
        relatedToUser: {
          id: userId,
        },
      },
    });

    return classrooms;
  }

  // @DESC   Get class
  // @ROUTE  instructor/class/:roomId
  async getClass(roomId: number) {
    if (!roomId)
      new HttpException({ error: 'Id does not exist' }, HttpStatus.BAD_GATEWAY);

    const classroom = await this.databaseService.classroom.findFirst({
      where: {
        id: roomId,
      },
    });

    if (!classroom)
      new HttpException(
        { error: 'Classroom does not exist' },
        HttpStatus.BAD_REQUEST,
      );

    return classroom;
  }

  // @DESC   Get the list of students who join the class by room id
  // @ROUTE  instructor/people/:roomId
  async getPeople(roomId: number) {
    if (!roomId)
      new HttpException({ error: 'Id does not exist' }, HttpStatus.BAD_REQUEST);

    const classroom = await this.databaseService.classroom.findUnique({
      where: {
        id: roomId,
      },
    });

    if (!classroom)
      new HttpException(
        { error: 'Classroom does not exist' },
        HttpStatus.BAD_GATEWAY,
      );

    const people = await this.databaseService.student.findMany({
      orderBy: [{ lastname: 'asc' }],
      where: {
        roomId: roomId,
      },
    });

    return people;
  }

  // @DESC   Get the list of students by roomId and workId
  // @ROUTE  instructor/view/student/activity/:roomId/:workId
  async getStudentActivityStatus(roomId: number, workId: number) {
    if (!roomId || !workId)
      new HttpException({ error: 'Id does not exist' }, HttpStatus.BAD_REQUEST);

    const classroom = await this.databaseService.classroom.findUnique({
      where: { id: roomId },
    });

    const classwork = await this.databaseService.activity.findUnique({
      where: { id: workId },
    });

    if (!classroom)
      new HttpException(
        { error: 'Classroom does not exist' },
        HttpStatus.BAD_REQUEST,
      );

    if (!classwork)
      new HttpException(
        { error: 'Classwork does not exist' },
        HttpStatus.BAD_REQUEST,
      );

    return await this.databaseService.output.findMany({
      where: {
        activityId: workId,
      },

      include: {
        relatedToStudent: true,
      },
    });
  }

  // @DESC   Get student info by classroom id
  // @ROUTE  instructor/getStudentInfo/:roomId/:studentId
  async getStudentInfo(roomId: number, studentId: number) {
    if (!roomId || !studentId)
      new HttpException({ error: 'Id does not exist' }, HttpStatus.BAD_REQUEST);

    const classroom = await this.databaseService.classroom.findUnique({
      where: {
        id: roomId,
      },
    });

    const student = await this.databaseService.student.findUnique({
      where: {
        userId: studentId,
        AND: {
          roomId: roomId,
        },
      },

      include: {
        relatedToUser: {
          select: {
            email: true,
            username: true,
          },
        },
      },
    });

    if (!classroom)
      new HttpException(
        { error: 'Classroom does not exist' },
        HttpStatus.BAD_REQUEST,
      );

    if (!student)
      new HttpException(
        { error: 'Student does not exist' },
        HttpStatus.BAD_REQUEST,
      );

    return student;
  }

  // @DESC   Get student files by studentId
  // @ROUTE  instructor/getStudentFiles/:studentId
  async getStudentFiles(studentId: number, workId: number, roomId: number) {
    if (!studentId || !workId || !roomId)
      new HttpException({ error: 'Id does not exist' }, HttpStatus.BAD_REQUEST);

    const student = await this.databaseService.student.findUnique({
      where: {
        userId: studentId,
      },
    });

    const activity = await this.databaseService.activity.findUnique({
      where: { id: workId },
    });

    const classroom = await this.databaseService.classroom.findUnique({
      where: {
        id: roomId,
      },
    });

    if (!student)
      new HttpException(
        { error: 'The student does not exist' },
        HttpStatus.BAD_REQUEST,
      );

    if (!activity)
      new HttpException(
        { error: 'Activity does not exist' },
        HttpStatus.BAD_GATEWAY,
      );

    if (!classroom)
      new HttpException(
        { error: 'Classroom does not exist' },
        HttpStatus.BAD_GATEWAY,
      );

    const outputs = await this.databaseService.output.findMany({
      where: {
        studentId: studentId,
        roomId: roomId,
        activityId: workId,
      },
      include: {
        relatedToScore: {
          select: {
            score: true,
          },
        },
        relatedToFeedback: {
          select: {
            feedback: true,
          },
        },
      },
    });

    const mappedOutputs = Promise.all(
      outputs.map((file) =>
        this.databaseService.files.findMany({
          where: { outputId: file.id },
          include: {
            relatedToOutput: {
              select: {
                relatedToScore: {
                  select: {
                    score: true,
                  },
                },
                relatedToFeedback: {
                  select: {
                    feedback: true,
                  },
                },
              },
            },
          },
        }),
      ),
    );

    return (await mappedOutputs).flat();
  }
}
