import { Injectable } from "@nestjs/common";
import { IsNotEmpty } from "class-validator";

@Injectable()
export class CreateArticleTypeDto {
    @IsNotEmpty({ message: "类别名称不可为空！" })
    name: string;
    @IsNotEmpty({ message: "类别中文名不可为空！" })
    title: string;
}
