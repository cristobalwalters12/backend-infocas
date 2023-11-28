import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('nombres_sensores')
export class NombreSensor {
  @PrimaryGeneratedColumn()
  id_sensor: number;

  @Column()
  nombre_sensor: string;
}
