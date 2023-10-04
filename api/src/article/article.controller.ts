import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) { }

  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  @Get()
  findAll(@Query("limit") limit: number, @Query("nowPage") nowPage: number, @Query("type") type: number) {
    return this.articleService.findAll(limit, nowPage, type);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleService.remove(+id);
  }

  @Get("/content/:content")
  findByContent(@Param("content") content: string, @Query("limit") limit: number, @Query("nowPage") nowPage: number) {
    return this.articleService.findByContent(content, limit, nowPage);
  } @Get("type/:type")
  findByType(@Param("type") type: number, @Query("limit") limit: number, @Query("nowPage") nowPage: number) {
    return this.articleService.findByType(type, limit, nowPage);
  }
}
