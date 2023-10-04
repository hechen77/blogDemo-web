import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArticleTypeService } from './article-type.service';
import { CreateArticleTypeDto } from './dto/create-article-type.dto';
import { UpdateArticleTypeDto } from './dto/update-article-type.dto';

@Controller('articleType')
export class ArticleTypeController {
  constructor(private readonly articleTypeService: ArticleTypeService) { }

  @Post()
  create(@Body() createArticleTypeDto: CreateArticleTypeDto) {
    return this.articleTypeService.create(createArticleTypeDto);
  }

  @Get()
  findAll() {
    return this.articleTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleTypeDto: UpdateArticleTypeDto) {
    return this.articleTypeService.update(+id, updateArticleTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleTypeService.remove(+id);
  }
}
