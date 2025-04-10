import { Test, TestingModule } from '@nestjs/testing';
import { ClassworkService } from './classwork.service';

describe('ClassworkService', () => {
  let service: ClassworkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassworkService],
    }).compile();

    service = module.get<ClassworkService>(ClassworkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
