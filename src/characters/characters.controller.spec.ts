import { Test, TestingModule } from '@nestjs/testing';
import { CharacterController } from './characters.controller';
import { CharactersService } from './characters.service';

describe('CharacterController', () => {
  let controller: CharacterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharacterController],
      providers: [CharactersService],
    }).compile();

    controller = module.get<CharacterController>(CharacterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
