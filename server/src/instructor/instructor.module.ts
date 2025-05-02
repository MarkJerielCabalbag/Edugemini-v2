import { Module } from '@nestjs/common';
import { InstructorService } from './instructor.service';
import { InstructorController } from './instructor.controller';
import { DatabaseModule } from 'src/database/database.module';
import { SupabaseModule } from 'nestjs-supabase-js';

@Module({
  imports: [DatabaseModule, SupabaseModule.injectClient()],
  controllers: [InstructorController],
  providers: [InstructorService],
})
export class InstructorModule {}
