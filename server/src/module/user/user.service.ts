import { Injectable } from '@nestjs/common';
import { User } from 'generated/prisma';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  //   async loginUser(user: Partial<User>): Promise<void> {
  //     const isUserExist = await this.prisma.user.findUnique({
  //       where: {
  //         email: user.email,
  //       },
  //     });

  //     if (!isUserExist) {
  //       throw new Error(`The email ${user.email} does not exist`);
  //     }
  //   }

  async signUpUser(user: Partial<User>): Promise<User> {
    const listOfUser = await this.prisma.user.findMany({});

    for (let isUserExist of listOfUser) {
      if (isUserExist.email === user.email) {
        throw new Error(`Account ${user.email} is already exist`);
      }
    }

    const newUser = await this.prisma.user.create({
      data: {
        email: user.email,
        username: user.username,
        password: user.password,
      },
    });

    return newUser;
  }
}
