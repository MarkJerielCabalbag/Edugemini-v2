import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { Prisma } from 'generated/prisma';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('approvedClassroom/:id')
  approveClassroom(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.adminService.approveClassroom(+id);
  }

  @Post('declinedClassroom/:id')
  declinedClassroom(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.adminService.declinedClassroom(+id);
  }

  // @Get()
  // findAll() {
  //   return this.adminService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.adminService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
  //   return this.adminService.update(+id, updateAdminDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.adminService.remove(+id);
  // }
}
