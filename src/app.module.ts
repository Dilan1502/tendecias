import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { StudentModule } from './student/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './student/student.entity';



@Module({
  imports: [UserModule, StudentModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'tap',
      entities: [StudentEntity],
      synchronize: true,
    }),],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
