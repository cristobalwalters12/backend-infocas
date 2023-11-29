import { Controller, Post, Body, Res } from '@nestjs/common';
import { SensoresService } from './sensores.service';
import { Response } from 'express';

@Controller('sensores')
export class SensoresController {
  constructor(private readonly sensoresService: SensoresService) {}

  @Post()
  async findAll(@Res() res: Response) {
    const data = await this.sensoresService.findAll();
    return res.status(200).json(data);
  }

  @Post('find')
  async find(
    @Body('nombreSensor') nombreSensor: string,
    @Body('startDateTime') startDateTime: string,
    @Body('endDateTime') endDateTime: string,
    @Res() res: Response,
  ) {
    const startDate = new Date(startDateTime);
    const endDate = new Date(endDateTime);
    const data = await this.sensoresService.find(
      nombreSensor,
      startDate,
      endDate,
    );
    return res.status(200).json(data);
  }

  @Post('findMinMax')
  async findMinMax(
    @Body('nombreSensor') nombreSensor: string,
    @Body('startDateTime') startDateTime: string,
    @Body('endDateTime') endDateTime: string,
    @Res() res: Response,
  ) {
    const startDate = new Date(startDateTime);
    const endDate = new Date(endDateTime);
    const data = await this.sensoresService.findMinMax(
      nombreSensor,
      startDate,
      endDate,
    );
    return res.status(200).json(data);
  }
}
