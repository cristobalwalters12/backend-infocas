// src/nombre-sensores/nombre-sensores.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NombreSensor } from '../entities/nombre-sensor.entity';
import { NombreSensoresService } from './nombre-sensores.service';
import { NombreSensoresController } from './nombre-sensores.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NombreSensor])],
  providers: [NombreSensoresService],
  controllers: [NombreSensoresController],
})
export class NombreSensoresModule {}
