import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { error } from 'console';
import { Announcement, Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';
import * as uuid from 'uuid';
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
    files: Express.Multer.File,
    announcementDto: Partial<Announcement>,
  ) {
    if (!announcementDto.title) {
      throw new HttpException(
        {
          error: 'Please fill the title',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

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
          error: `The title ${announcementDto.title} is already exist`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    console.log(files);
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} instructor`;
  // }

  // update(id: number, updateInstructorDto: UpdateInstructorDto) {
  //   return `This action updates a #${id} instructor`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} instructor`;
  // }
}
