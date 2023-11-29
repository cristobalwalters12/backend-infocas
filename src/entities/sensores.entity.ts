import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { NombreSensor } from './nombre-sensor.entity';

@Entity('sensores')
export class Sensores {
  @PrimaryColumn('bigint')
  numero_registro: number;

  @ManyToOne(() => NombreSensor)
  @JoinColumn({ name: 'id_sensor' })
  nombreSensor: NombreSensor;

  @Column('int')
  id_sensor: number;

  @Column('float')
  temperatura: number;

  @Column('float')
  humedad: number;

  @Column('date')
  fecha: Date;

  @Column('time')
  hora: string;
}
