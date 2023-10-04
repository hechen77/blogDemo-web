import { Injectable } from "@nestjs/common";
import { IsNotEmpty } from "class-validator";

@Injectable()
export class CreateArticleDto {
    @IsNotEmpty({ message: "标题不可为空！" })
    title: string;
    @IsNotEmpty({ message: "作者不可为空！" })
    author: string;
    @IsNotEmpty({ message: "封面图不可为空！" })
    cover: string;
    @IsNotEmpty({ message: "文章类别不可为空！" })
    articleType: number;
    @IsNotEmpty({ message: "文章内容不可为空！" })
    content: string;
}
