import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { InstructorModule } from './instructor/instructor.module';
import { AdminModule } from './admin/admin.module';
import { SupabaseModule } from 'nestjs-supabase-js';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    InstructorModule,
    AdminModule,
    SupabaseModule.forRoot({
      supabaseKey:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0ZnBwemN1d3pvdmFsc3NoYmh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxNjg4MjEsImV4cCI6MjA1OTc0NDgyMX0._qIXeDU13N2PIp5ekwh-LuT00wA1c8UPoawNRYiYjGQ',
      supabaseUrl: 'https://itfppzcuwzovalsshbhw.supabase.co',
    }),
    StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
