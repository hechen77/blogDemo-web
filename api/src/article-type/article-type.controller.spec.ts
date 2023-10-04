import { Test, TestingModule } from '@nestjs/testing';
import { ArticleTypeController } from './article-type.controller';
import { ArticleTypeService } from './article-type.service';

describe('ArticleTypeController', () => {
  let controller: ArticleTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleTypeController],
      providers: [ArticleTypeService],
    }).compile();

    controller = module.get<ArticleTypeController>(ArticleTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
