import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IsEmail } from 'class-validator';
import { Prisma, User } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { stat } from 'fs';
@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}

  /**
   * Creates a new user account.
   * @body {Prisma.UserCreateInput} - The data transfer object containing the user's information (e.g., username, email, password).
   * @returns A promise that resolves to the newly created `User` object.
   * @throws {BadRequestException} If the provided email address is already in use.
   */
  async signUp(createUserDto: Prisma.UserCreateInput): Promise<User> {
    if (
      !createUserDto.username ||
      !createUserDto.email ||
      !createUserDto.password
    ) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Please fill all the fields',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const isUserExist = await this.databaseService.user.findFirst({
      where: {
        email: createUserDto.email,
      },
    });

    const hashPassword = await bcrypt.hash(createUserDto.password, 10);

    if (isUserExist) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: `${createUserDto.email} is already exist`,
        },
        HttpStatus.CONFLICT,
      );
    }

    const newUser = await this.databaseService.user.create({
      data: { ...createUserDto, password: hashPassword },
      omit: {
        password: true,
      },
    });

    throw new HttpException(
      {
        status: HttpStatus.CREATED,
        data: newUser,
        message: `Welcome ${newUser.username}`,
      },
      HttpStatus.CREATED,
    );
  }

  /**
   * Sign in user account.
   * @body {User} - The data transfer object containing the user's information (e.g., username, email, password).
   * @returns A promise that returns a json format.
   * @throws {BadRequestException} If the account is not registered yet.
   */
  async signIn(userDto: Partial<User>): Promise<void> {
    if (!userDto.username || !userDto.email || !userDto.password) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Please fill all the fields',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const isUserExist = await this.databaseService.user.findFirst({
      where: {
        email: userDto.email,
      },
    });

    if (!isUserExist) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: `${userDto.email} is not registered yet`,
        },
        HttpStatus.CONFLICT,
      );
    } else {
      throw new HttpException(
        {
          status: HttpStatus.ACCEPTED,
          message: `Welccome ${userDto.username}!`,
        },
        HttpStatus.ACCEPTED,
      );
    }
  }

  // async findAll() {
  //   return `This action returns all user`;
  // }

  // async findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // async update(id: number, updateUserDto: Prisma.UserUpdateInput) {
  //   return `This action updates a #${id} user`;
  // }

  // async remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
