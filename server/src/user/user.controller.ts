import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, User } from 'generated/prisma';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signUp')
  signUp(@Body() createUserDto: Prisma.UserCreateInput): Promise<User> {
    return this.userService.signUp(createUserDto);
  }

  @Post('signIn')
  signIn(@Body() userDto: Partial<User>): Promise<void> {
    return this.userService.signIn(userDto);
  }
}
