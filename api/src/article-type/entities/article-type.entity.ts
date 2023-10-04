import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ArticleType {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        type: "varchar",
        comment: "类别名称"
    })
    name: string;
    @Column({
        type: "varchar",
        comment: "类别中文名"
    })
    title: string;
    @Column({
        type: "int",
        width: 1,
        default: 1
    })
    status: number;
}
