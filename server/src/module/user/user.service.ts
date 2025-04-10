import { Injectable } from '@nestjs/common';
import { User } from 'generated/prisma';
import { throwError } from 'rxjs';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async loginUser(user: Partial<User>): Promise<void> {
    const isUserExist = await this.prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });

    if (!isUserExist) {
      throw new Error(`The email ${user.email} does not exist`);
    }
  }
}
