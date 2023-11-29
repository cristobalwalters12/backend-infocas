import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Sensores } from './sensores.entity';

@Entity('nombres_sensores')
export class NombreSensor {
  @PrimaryColumn()
  id_sensor: number;

  @OneToMany(() => Sensores, (sensores) => sensores.nombreSensor)
  sensores: Sensores[];

  @Column({ length: 99 })
  nombre_sensor: string;
}
