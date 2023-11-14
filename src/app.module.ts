import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { StudentModule } from './student/student.module';
import { DilanModule } from './dilan/dilan.module';

@Module({
  imports: [UserModule, StudentModule, DilanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
