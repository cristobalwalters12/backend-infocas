// src/nombre-sensores/nombre-sensores.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NombreSensor } from '../entities/nombre-sensor.entity';

@Injectable()
export class NombreSensoresService {
  constructor(
    @InjectRepository(NombreSensor)
    private nombreSensorRepository: Repository<NombreSensor>,
  ) {}

  findAll() {
    return this.nombreSensorRepository.find();
  }

  findOne(id: number) {
    return this.nombreSensorRepository.findOne({
      where: { id_sensor: id },
    });
  }
}
