import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sensores } from '../entities/sensores.entity';

@Injectable()
export class SensoresService {
  constructor(
    @InjectRepository(Sensores)
    private sensoresRepository: Repository<Sensores>,
  ) {}

  findAll() {
    return this.sensoresRepository.find();
  }

  async find(nombreSensor: string, startDateTime: Date, endDateTime: Date) {
    startDateTime.setHours(0, 0, 0, 0);
    endDateTime.setHours(23, 59, 59, 999);

    return this.sensoresRepository
      .createQueryBuilder('sensores')
      .innerJoin('sensores.nombreSensor', 'nombres_sensores')
      .where('nombres_sensores.nombre_sensor = :nombreSensor', { nombreSensor })
      .andWhere(
        "CONCAT(sensores.fecha, ' ', sensores.hora) BETWEEN :startDateTime AND :endDateTime",
        { startDateTime, endDateTime },
      )
      .orderBy('sensores.fecha', 'ASC')
      .addOrderBy('sensores.hora', 'ASC')
      .getMany();
  }
  async findMinMax(
    nombreSensor: string,
    startDateTime: Date,
    endDateTime: Date,
  ) {
    startDateTime.setHours(0, 0, 0, 0);
    endDateTime.setHours(23, 59, 59, 999);

    return this.sensoresRepository
      .createQueryBuilder('sensores')
      .innerJoin('sensores.nombreSensor', 'nombres_sensores')
      .select([
        'ROUND(MIN(sensores.temperatura),2) as minima_temperatura',
        'ROUND(MAX(sensores.temperatura),2) as maxima_temperatura',
        'ROUND(MIN(sensores.humedad),2) as minima_humedad',
        'ROUND(MAX(sensores.humedad),2) as maxima_humedad',
      ])
      .where('nombres_sensores.nombre_sensor = :nombreSensor', { nombreSensor })
      .andWhere('sensores.fecha BETWEEN :startDateTime AND :endDateTime', {
        startDateTime,
        endDateTime,
      })
      .orderBy('sensores.fecha', 'ASC')
      .addOrderBy('sensores.hora', 'ASC')
      .getRawOne();
  }
}
