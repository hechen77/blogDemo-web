import { returnError } from './../utils/config';
import { Injectable } from '@nestjs/common';
import { CreateArticleTypeDto } from './dto/create-article-type.dto';
import { UpdateArticleTypeDto } from './dto/update-article-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleType } from './entities/article-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleTypeService {
  constructor(@InjectRepository(ArticleType) private readonly articleTypeDB: Repository<ArticleType>) { }

  // 创建文章类别
  async create(createArticleTypeDto: CreateArticleTypeDto) {
    const data = await this.articleTypeDB.save(createArticleTypeDto);
    return {
      message: "添加成功！",
      otherData: {
        articleTypeId: data.id
      }
    }
  }

  async findAll() {
    const data = await this.articleTypeDB.find({
      where: {
        status: 1
      },
      order: {
        id: "DESC"
      }
    })
    const count = await this.articleTypeDB.count({
      where: {
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

  async findOne(id: number) {
    const data = await this.articleTypeDB.find({
      where: {
        id: id,
        status: 1
      }
    })
    return {
      data
    }
  }

  async update(id: number, updateArticleTypeDto: UpdateArticleTypeDto) {
    const data = await this.articleTypeDB.update(id, updateArticleTypeDto);
    return data.affected == 1 ? { message: "更新成功！" } : { message: "更新失败！", ...returnError }
  }

  async remove(id: number) {
    const data = await this.articleTypeDB.update(id, { status: 0 });
    return data.affected == 1 ? { message: "删除成功！" } : { message: "删除失败！", ...returnError }
  }
}
