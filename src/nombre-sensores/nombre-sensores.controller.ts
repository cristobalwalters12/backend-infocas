// src/nombre-sensores/nombre-sensores.controller.ts
import { Controller, Get, Post, Param, UseGuards } from '@nestjs/common';
import { NombreSensoresService } from './nombre-sensores.service';
import { FirebaseAuthGuard } from '../auth.guard';

@Controller('nombre_sensores')
@UseGuards(FirebaseAuthGuard)
export class NombreSensoresController {
  constructor(private readonly nombreSensoresService: NombreSensoresService) {}

  @Get()
  findAll() {
    return this.nombreSensoresService.findAll();
  }

  @Post(':id')
  findOne(@Param('id') id: string) {
    return this.nombreSensoresService.findOne(+id);
  }
}
