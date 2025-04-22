import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Classroom, Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';
import * as uuid from 'uuid';
@Injectable()
export class AdminService {
  constructor(private readonly databaseService: DatabaseService) {}

  async approveClassroom(id: number): Promise<void> {
    const isClassroomExist = await this.databaseService.classroom.findUnique({
      where: {
        id,
      },
    });

    if (!isClassroomExist) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_GATEWAY,
          error: `The ID ${id} does not exist`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const updateClassroom = await this.databaseService.classroom.update({
      where: {
        id,
      },
      data: {
        status: 'APPROVED',
        classcode: uuid.v4(),
      },
    });

    throw new HttpException(
      {
        status: HttpStatus.ACCEPTED,
        message: `${updateClassroom.classname} is successfully approved`,
      },
      HttpStatus.ACCEPTED,
    );
  }

  async declinedClassroom(id: number): Promise<void> {
    const isClassroomExist = await this.databaseService.classroom.findUnique({
      where: {
        id,
      },
    });

    if (!isClassroomExist) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_GATEWAY,
          error: `The ID ${id} does not exist`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const updateClassroom = await this.databaseService.classroom.update({
      where: {
        id,
      },
      data: {
        status: 'DECLINED',
      },
    });

    throw new HttpException(
      {
        status: HttpStatus.ACCEPTED,
        message: `${updateClassroom.classname} is successfully declined`,
      },
      HttpStatus.ACCEPTED,
    );
  }

  // findAll() {
  //   return `This action returns all admin`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} admin`;
  // }

  // update(id: number, updateAdminDto: UpdateAdminDto) {
  //   return `This action updates a #${id} admin`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} admin`;
  // }
}
