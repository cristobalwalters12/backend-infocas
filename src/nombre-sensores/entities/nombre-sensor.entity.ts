import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('nombre_sensores')
export class NombreSensor {
  @PrimaryGeneratedColumn()
  id_sensor: number;

  @Column()
  nombre_sensor: string;
}
