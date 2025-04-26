import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Activity, Announcement, Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';
import {
  existsSync,
  mkdirSync,
  rename,
  renameSync,
  rm,
  rmSync,
  unlink,
  unlinkSync,
} from 'fs';
import { join } from 'path';

@Injectable()
export class InstructorService {
  constructor(private readonly databaseService: DatabaseService) {}

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
  //@ROUTE  instructor/createAnnouncement/:roomId/:title
  async createAnnouncement(
    roomId: number,
    files: Express.Multer.File[],
    announcementDto: Partial<Announcement>,
    title: string,
  ) {
    if (!title) {
      throw new HttpException(
        {
          error: 'Please fill atleast the title',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const isAnnoucementExist =
      await this.databaseService.announcement.findFirst({
        where: {
          title: title,
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
        title: title,
        description: announcementDto.description,
        relatedToClassroom: {
          connect: {
            id: roomId,
          },
        },
      },
    });

    console.log(files);

    if (files) {
      files.forEach(async (file) => {
        const mimetype = file.originalname.split('.').pop();
        return await this.databaseService.files.create({
          data: {
            filename: file.originalname,
            mimetype: mimetype ?? '',
            fileSize: file.size,
            folderPath: file.destination,
            filePath: `${file.destination}/${file.originalname}`,
            relatedToAnnouncement: {
              connect: {
                id: newAnnouncement.id,
              },
            },
          },
        });
      });
    }

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

    const fileToDelete = await this.databaseService.files.findFirst({
      where: {
        relatedToAnnouncement: {
          id: isAnnouncementExist.id,
        },
      },
    });

    if (fileToDelete?.folderPath) {
      rm(fileToDelete?.folderPath, { recursive: true, force: true }, (err) => {
        if (err) throw err;
        console.log(`${fileToDelete?.folderPath} is deleted`);
      });
    }

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
    title: string,
    activityDto: Partial<Activity>,
    file: Express.Multer.File,
  ): Promise<void> {
    if (!title || !activityDto.date || !activityDto.time) {
      throw new HttpException(
        {
          error: 'Please fill all fields',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

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
        title: title,
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

    if (isActivityExist?.title === title) {
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
        title,
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

    //activity file details
    await this.databaseService.files.create({
      data: {
        filename: file.originalname,
        mimetype: file.mimetype,
        fileSize: file.size,
        folderPath: `uploads/${isClassroomExist?.classname}/activities/${newActivity?.title}`,
        filePath: `${file.destination}/${file.originalname}`,
        relatedToActivity: {
          connect: {
            id: newActivity.id,
          },
        },
      },
    });

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

    const existingFile = await this.databaseService.files.findFirst({
      where: { relatedToActivity: { id: activityId } },
    });

    if (!existingFile) {
      throw new HttpException(
        { error: 'File path does not exist' },
        HttpStatus.BAD_REQUEST,
      );
    }

    const newFolderPath = `uploads/${classroom.classname}/activities/${activityDto.title || activity.title}/instruction`;
    const newFilePath = `${newFolderPath}/${file?.originalname || existingFile.filename}`;

    // Ensure target folder exists
    if (!existsSync(newFolderPath)) {
      mkdirSync(newFolderPath, { recursive: true });
    }

    if (file && !activityDto.title && existingFile?.folderPath) {
      try {
        renameSync(existingFile?.folderPath, newFolderPath);
      } catch (err) {
        console.error('File move error:', err);
        throw new HttpException(
          { error: 'Failed to move uploaded file' },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }

    // Delete old folder if it differs from new
    if (
      existingFile.folderPath &&
      existingFile.folderPath !== newFolderPath &&
      existsSync(existingFile.folderPath)
    ) {
      rmSync(`uploads/${classroom?.classname}/activities/${activity?.title}`, {
        recursive: true,
        force: true,
      });
    }

    // Update activity
    await this.databaseService.activity.update({
      data: {
        title: activityDto.title,
        date: activityDto.date,
        time: activityDto.time,
        instruction: activityDto.instruction,
        relatedToClassroom: { connect: { id: roomId } },
      },
      where: { id: activityId },
    });

    // Update file
    await this.databaseService.files.update({
      where: { id: existingFile.id },
      data: {
        filename: file?.originalname || existingFile.filename,
        mimetype: file?.mimetype || existingFile.mimetype,
        fileSize: file?.size || existingFile.fileSize,
        folderPath: newFolderPath,
        filePath: newFilePath,
      },
    });

    throw new HttpException({ message: 'Updated successfully' }, HttpStatus.OK);
  }

  // remove(id: number) {
  //   return `This action removes a #${id} instructor`;
  // }
}
