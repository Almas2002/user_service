import { Gender } from '../gender/gender.entity';
import { Category } from '../category/category.entity';
import { Hobby } from '../hobby/hobby.entity';
import {
  Column,
  Entity, JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany, OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Complaint } from '../complaint/complaint.entity';
import { Like } from './like.entity';
import { BaseEntity } from '../baseEntity';
import { Religion } from '../ religion/religion.entity';
import { ProfilePhotos } from './profile-photos.entity';


@Entity()
export class Profile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userId: number;
  @Column()
  description: string;
  @Column()
  region: string;
  @Column()
  age: number;
  @Column()
  firstName: string;
  @OneToOne(()=>ProfilePhotos,photo=>photo,{onDelete:"CASCADE"})
  @JoinColumn()
  avatar:ProfilePhotos
  @Column()
  secondName: string;
  @ManyToOne(() => Category, category => category)
  category: Category;
  @ManyToOne(() => Gender, gender => gender)
  gender: Gender;
  @ManyToMany(() => Hobby, hobby => hobby.users)
  @JoinTable({ name: 'profile_hobbies__hobby_profiles' })
  hobbies: Hobby[];
  // мои репорты
  @OneToMany(() => Complaint, complaint => complaint.reporter)
  sendReports: Complaint[];
  // мои жалобы
  @OneToMany(() => Complaint, complaint => complaint.culprit)
  complaints: Complaint[];

  @OneToMany(() => Like, like => like.likedProfile)
  likedUsers: Like[];

  @OneToMany(() => Like, like => like.profile)
  myLikes: Like[];

  @Column({ default: false })
  block: boolean;

  @ManyToOne(() => Religion, religion => religion)
  religion: Religion;

  @OneToMany(()=>ProfilePhotos,photo=>photo.profile)
  photos:ProfilePhotos[]


}