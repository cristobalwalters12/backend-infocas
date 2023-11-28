import { Module } from '@nestjs/common';
import { NombreSensoresService } from './nombre-sensores.service';
import { NombreSensoresController } from './nombre-sensores.controller';

@Module({
  providers: [NombreSensoresService],
  controllers: [NombreSensoresController],
})
export class NombreSensoresModule {}
