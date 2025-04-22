import { Injectable } from '@nestjs/common';
import { Classroom, Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AdminService {
  constructor(private readonly databaseService: DatabaseService) {}

  // async approveClassroom(
  //   approveClassroomDto: Prisma.ClassroomUpdateInput,
  // ): Promise<Classroom> {
  //   const isClassroomExist = await this.databaseService.classroom.findUnique({

  //   })
  // }

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
