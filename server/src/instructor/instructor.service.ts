import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Activity, Announcement, Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';
import { existsSync, rm, unlink, unlinkSync } from 'fs';
import { SupabaseClient } from '@supabase/supabase-js';

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

    const newAnnouncement = await this.databaseService.announcement
      .create({
        data: {
          title: announcementDto?.title ?? '',
          description: announcementDto.description,
          relatedToClassroom: {
            connect: {
              id: roomId,
            },
          },
        },
      })
      .catch((error) => {
        throw new HttpException(
          { error: error.message },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      });

    files.forEach(async (file) => {
      const mimetype = file.originalname.split('.').pop();
      const { data, error } = await this.supabase.storage
        .from('edugemini')
        .upload(
          `classroom/${isClassroomExist?.classname}/announcement/${newAnnouncement.title}/${file.originalname}`,
          file.buffer,
        );
      if (data) {
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

    //activity details
    const newActivity = await this.databaseService.activity.create({
      data: {
        title: activityDto.title,
        date: activityDto.date,
        time: activityDto.time,
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
    file: Express.Multer.File,
    activityDto: Partial<Activity>,
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

    const listOfActivities = await this.databaseService.activity.findMany({
      where: {
        roomId: roomId,
      },
    });

    //map all activities if the activity title to be updated is already exist
    listOfActivities.map((activity) => {
      if (activity.title === activityDto.title) {
        throw new HttpException(
          { error: 'Duplicate Title' },
          HttpStatus.CONFLICT,
        );
      }
    });

    const currentFile = await this.databaseService.files.findFirst({
      where: {
        activityId: activityId,
      },
    });

    if (file) {
      if (currentFile?.filePath) {
        const { data, error } = await this.supabase.storage
          .from('edugemini')
          .remove([currentFile?.filePath]);
        if (error) {
          throw new HttpException(
            { error: error.message },
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        } else {
          const updatedActivity = await this.databaseService.activity.update({
            where: { id: activityId },
            data: {
              title: activityDto.title,
              time: activityDto.time,
              date: activityDto.date,
              instruction: activityDto.instruction,
            },
          });
          const { data, error } = await this.supabase.storage
            .from('edugemini')
            .upload(
              `classroom/${classroom?.classname}/activity/${updatedActivity.title}/${file.originalname}`,
              file.buffer,
            );

          await this.databaseService.files.update({
            where: {
              id: currentFile.id,
            },
            data: {
              filename: file.originalname,
              fileSize: file.size,
              mimetype: file.mimetype,
              filePath: `classroom/${classroom?.classname}/activity/${updatedActivity.title}/${file.originalname}`,
              folderPath: `classroom/${classroom?.classname}/activity/${updatedActivity.title}`,
            },
          });

          if (data) {
            throw new HttpException(
              { message: 'Successfully Updated' },
              HttpStatus.ACCEPTED,
            );
          } else {
            throw new HttpException(
              { error: error.message },
              HttpStatus.BAD_REQUEST,
            );
          }
        }
      }
    }
  }

  // remove(id: number) {
  //   return `This action removes a #${id} instructor`;
  // }
}
