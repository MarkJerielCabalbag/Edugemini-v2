import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Announcement, Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';
import { rm } from 'fs';
import path from 'path';

@Injectable()
export class InstructorService {
  constructor(private readonly databaseService: DatabaseService) {}

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

  async createAnnouncement(
    roomId: number,
    file: Express.Multer.File,
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

    console.log(file);

    if (file) {
      await this.databaseService.files.create({
        data: {
          filename: file.originalname,
          mimetype: file.mimetype,
          fileSize: file.size,
          destination: file.destination,
          relatedToAnnouncement: {
            connect: {
              id: newAnnouncement.id,
            },
          },
        },
      });
    }

    throw new HttpException(
      {
        message: `The new announcement title: ${newAnnouncement.title} successfully created`,
      },
      HttpStatus.CREATED,
    );
  }

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

    if (fileToDelete?.destination) {
      rm(fileToDelete?.destination, { recursive: true, force: true }, (err) => {
        if (err) throw err;
        console.log(`${fileToDelete?.destination} is deleted`);
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
  // update(id: number, updateInstructorDto: UpdateInstructorDto) {
  //   return `This action updates a #${id} instructor`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} instructor`;
  // }
}
