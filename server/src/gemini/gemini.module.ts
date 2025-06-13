import { Module } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [GeminiService],
  exports: [GeminiService],
})
export class GeminiModule {}
