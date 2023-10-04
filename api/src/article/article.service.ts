import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';

@Injectable()
export class ArticleService {
  constructor(@InjectRepository(Article) private readonly articleDB: Repository<Article>) { }

  // 添加文章
  async create(createArticleDto: CreateArticleDto) {
    const data = await this.articleDB.save(createArticleDto);
    return {
      message: "添加成功！",
      otherData: {
        articleId: data.id
      }
    }
  }

  // 查询文章列表（分页）
  async findAll(limit: number, nowPage: number, type: number) {
    const data = await this.articleDB.find({
      where: {
        articleType: type,
        status: 1
      },
      order: {
        sendTime: "DESC"
      },
      skip: (nowPage - 1) * limit,
      take: limit
    })
    const count = await this.articleDB.count({
      where: {
        articleType: type,
        status: 1
      }
    })
    return {
      data,
      otherData: {
        count
      }
    }
  }

  // 查询文章 By ID
  async findOne(id: number) {
    const data = await this.articleDB.findOne({
      where: {
        id,
        status: 1
      }
    });
    return {
      data
    }
  }

  // 更新文章
  async update(id: number, updateArticleDto: UpdateArticleDto) {
    const data = await this.articleDB.update(id, updateArticleDto);
    return data.affected == 1 ? { message: "更新成功！" } : { message: "更新失败！", code: 202, success: false }
  }

  // 删除文章
  async remove(id: number) {
    const data = await this.articleDB.update(id, { status: 0 });
    return data.affected == 1 ? { message: "删除成功！" } : { message: "删除失败！", code: 202, success: false }
  }

  // 搜索文章 By Content
  async findByContent(content: string, limit: number, nowPage: number) {
    let data, count;
    if (content && limit && nowPage) {
      data = await this.articleDB.find({
        where: [
          {
            title: Like(`%${content}%`),
            status: 1
          }, {
            content: Like(`%${content}%`),
            status: 1
          }
        ],
        order: {
          sendTime: "DESC"
        },
        skip: (nowPage - 1) * limit,
        take: limit
      })
      count = await this.articleDB.count({
        where: [
          {
            title: Like(`%${content}%`),
            status: 1
          }, {
            content: Like(`%${content}%`),
            status: 1
          }
        ]
      });
    }
    return {
      data,
      otherData: {
        count
      }
    }
  }
  // 搜索文章 By Type
  async findByType(type: number, limit: number, nowPage: number) {
    let data, count;
    if (type && limit && nowPage) {
      const data = await this.articleDB.find({
        where:
        {
          articleType: type,
          status: 1
        }
        ,
        order: {
          sendTime: "DESC"
        },
        skip: (nowPage - 1) * limit,
        take: limit
      })
      const count = await this.articleDB.count({
        where:
        {
          articleType: type,
          status: 1
        }
      });
      return {
        data,
        otherData: {
          count
        }
      }
    }
  }
}
