import { Test, TestingModule } from '@nestjs/testing';
import { CareProviderController } from './care-provider.controller';

describe('CareProvider Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [CareProviderController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: CareProviderController = module.get<CareProviderController>(CareProviderController);
    expect(controller).toBeDefined();
  });
});
