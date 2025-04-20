import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, User } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}

  /**
   * Creates a new user account.
   * @body {Prisma.UserCreateInput} - The data transfer object containing the user's information (e.g., username, email, password).
   * @returns A promise that resolves to the newly created `User` object.
   * @throws {BadRequestException} If the provided email address is already in use.
   */
  async create(createUserDto: Prisma.UserCreateInput): Promise<User> {
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

    if (isUserExist) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: `${isUserExist.email} is already exist`,
        },
        HttpStatus.CONFLICT,
      );
    }

    return this.databaseService.user.create({
      data: createUserDto,
    });
  }

  async findAll() {
    return `This action returns all user`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
