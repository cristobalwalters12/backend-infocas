// src/nombre-sensores/nombre-sensores.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { NombreSensoresService } from './nombre-sensores.service';
@Controller('nombre-sensores')
export class NombreSensoresController {
  constructor(private readonly nombreSensoresService: NombreSensoresService) {}

  @Get()
  findAll() {
    return this.nombreSensoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nombreSensoresService.findOne(+id);
  }
}
