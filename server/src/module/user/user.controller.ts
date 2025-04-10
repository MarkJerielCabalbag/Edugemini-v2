import { Body, Controller, HttpStatus, Get, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'generated/prisma';
import { Response } from 'express';
import * as bcypt from 'bcryptjs';
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
      try {
        const hashPassword = await bcypt.hash(user.password, 10);

        const newUser = {
          email: user.email,
          username: user.username,
          password: hashPassword,
        };

        const result = await this.userService.signUpUser(newUser);
        res.status(HttpStatus.CREATED).json({
          status: HttpStatus.CREATED,
          message: `Successfully registered the account ${result?.email}`,
        });
      } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
          status: HttpStatus.BAD_REQUEST,
          message: error.message,
        });
      }
    } else {
      res.status(HttpStatus.BAD_REQUEST).json({
        status: HttpStatus.BAD_REQUEST,
        message: 'Please fill all fields',
      });
    }
  }
}
