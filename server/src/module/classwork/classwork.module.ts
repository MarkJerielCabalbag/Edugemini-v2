import { Module } from '@nestjs/common';
import { ClassworkService } from './classwork.service';

@Module({
  providers: [ClassworkService]
})
export class ClassworkModule {}
