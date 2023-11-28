import { Test, TestingModule } from '@nestjs/testing';
import { NombreSensoresService } from './nombre-sensores.service';

describe('NombreSensoresService', () => {
  let service: NombreSensoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NombreSensoresService],
    }).compile();

    service = module.get<NombreSensoresService>(NombreSensoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
