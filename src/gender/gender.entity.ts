import { Category } from '../category/category.entity';
import { Hobby } from '../hobby/hobby.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Gender {
  @PrimaryGeneratedColumn()
  id:number;
  @Column()
  value:string;
  @OneToMany(()=>Category,category=>category.gender)
  categories:Category[]
  @OneToMany(()=>Hobby,hobby=>hobby.gender)
  hobbies:Hobby[]
}