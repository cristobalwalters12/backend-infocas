import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensoresService } from './sensores.service';
import { SensoresController } from './sensores.controller';
import { Sensores } from '../entities/sensores.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sensores])],
  providers: [SensoresService],
  controllers: [SensoresController],
})
export class SensoresModule {}
