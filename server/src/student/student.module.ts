import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { DatabaseModule } from 'src/database/database.module';
import { SupabaseModule } from 'nestjs-supabase-js';
import { GeminiModule } from 'src/gemini/gemini.module';

@Module({
  imports: [GeminiModule, DatabaseModule, SupabaseModule.injectClient()],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
