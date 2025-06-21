import { Module } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { DatabaseModule } from 'src/database/database.module';
import { SupabaseModule } from 'nestjs-supabase-js';

@Module({
  imports: [DatabaseModule, SupabaseModule.injectClient()],
  providers: [GeminiService],
  exports: [GeminiService],
})
export class GeminiModule {}
