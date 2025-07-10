import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { InstructorModule } from './instructor/instructor.module';

import { SupabaseModule } from 'nestjs-supabase-js';
import { StudentModule } from './student/student.module';
import { ConfigModule } from '@nestjs/config';
import { GeminiController } from './gemini/gemini.controller';
import { GeminiService } from './gemini/gemini.service';
import { GeminiModule } from './gemini/gemini.module';
@Module({
  imports: [
    DatabaseModule,
    UserModule,
    InstructorModule,

    ConfigModule.forRoot(),
    SupabaseModule.forRoot({
      supabaseKey: process.env.SUPABASE_KEY as string,
      supabaseUrl: process.env.SUPABASE_URL as string,
    }),
    StudentModule,
    GeminiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
