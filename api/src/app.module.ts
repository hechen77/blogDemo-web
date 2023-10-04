import { Module } from '@nestjs/common';
import { ArticleModule } from './article/article.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ArticleTypeModule } from './article-type/article-type.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '139.224.46.4',
    port: 3306,
    username: 'freeBlog',
    password: 'ffxEixSyhbMJK6LN',
    database: 'freeblog',
    synchronize: true,
    autoLoadEntities: true
  }), ArticleModule, ArticleTypeModule],
})
export class AppModule { }
