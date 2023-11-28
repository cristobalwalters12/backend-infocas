import { Test, TestingModule } from '@nestjs/testing';
import { NombreSensoresController } from './nombre-sensores.controller';

describe('NombreSensoresController', () => {
  let controller: NombreSensoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NombreSensoresController],
    }).compile();

    controller = module.get<NombreSensoresController>(NombreSensoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
