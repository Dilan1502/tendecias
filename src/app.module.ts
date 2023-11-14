import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AnimalModule } from './student/animal.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalEntity } from './student/animal.entity';



@Module({
  imports: [UserModule, AnimalModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'tap',
      entities: [AnimalEntity],
      synchronize: true,
    }),],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
