import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Article {
	@PrimaryGeneratedColumn()
	id: number;
	@Column({
		type: "varchar",
		comment: "文章标题"
	})
	title: string;
	@Column({
		type: "varchar",
		comment: "作者"
	})
	author: string;
	@Column({
		type: "varchar",
		comment: "封面图"
	})
	cover: string;
	@CreateDateColumn()
	sendTime: string;
	@Column({
		type: "int",
		width: 5,
		comment: "文章类别"
	})
	articleType: number;
	@Column({
		type: "longtext",
		comment: "文章内容"
	})
	content: string;
	@Column({
		type: "int",
		width: 1,
		default: 1
	})
	status: number;
}
