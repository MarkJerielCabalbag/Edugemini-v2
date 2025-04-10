import { Body, Controller, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'generated/prisma';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('sigin')
  async signin(
    @Body() user: Partial<User>,
    @Res() res: Response,
  ): Promise<void> {
    if (user.username && user.email && user.password) {
      try {
        const newUser = {
          username: user.username,
          email: user.email,
          password: user.password,
        };
      } catch (error) {}
    }
  }

  @Post('signup')
  async signup(
    @Body() user: Partial<User>,
    @Res() res: Response,
  ): Promise<void> {
    if (user.email && user.username && user.password) {
    }
  }
}
