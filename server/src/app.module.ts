import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';

import { InstructorModule } from './instructor/instructor.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [DatabaseModule, UserModule, InstructorModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
