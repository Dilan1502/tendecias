import { Module } from '@nestjs/common';
import { AnimalController } from './animal.controller';
import { AnimalServices } from './animal.services';
import { AnimalEntity } from './animal.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AnimalEntity])],
  controllers: [AnimalController],
  providers: [AnimalServices],
})
export class AnimalModule {}
