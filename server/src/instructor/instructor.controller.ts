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
import { InstructorService } from './instructor.service';
import { Prisma } from 'generated/prisma';

@Controller('instructor')
export class InstructorController {
  constructor(private readonly instructorService: InstructorService) {}

  @Post('createClassroom/:id')
  createClassroom(
    @Body() createClassroomDto: Prisma.ClassroomCreateInput,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.instructorService.createClassroom(createClassroomDto, +id);
  }

  // @Get()
  // findAll() {
  //   return this.instructorService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.instructorService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateInstructorDto: UpdateInstructorDto,
  // ) {
  //   return this.instructorService.update(+id, updateInstructorDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.instructorService.remove(+id);
  // }
}
