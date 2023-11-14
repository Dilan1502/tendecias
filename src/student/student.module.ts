import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentServices } from './student.services';
import { StudentEntity } from './student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity])],
  controllers: [StudentController],
  providers: [StudentServices],
})
export class StudentModule {}
