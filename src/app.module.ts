import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category/category.entity';
import { Gender } from './gender/gender.entity';
import { Hobby } from './hobby/hobby.entity';
import { Profile } from './profile/profile.entity';
import { CategoryModule } from './category/category.module';
import { GenderModule } from './gender/gender.module';
import { HobbyModule } from './hobby/hobby.module';
import { ProfileModule } from './profile/profile.module';
import { ComplaintModule } from './complaint/complaint.module';
import { Complaint } from './complaint/complaint.entity';
import { Like } from './profile/like.entity';
import { Religion } from './ religion/religion.entity';
import { ReligionModule } from './ religion/religion.module';
import { ProfilePhotos } from './profile/profile-photos.entity';
import { ConfigModule } from '@nestjs/config';
require('dotenv').config()

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:".env"
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Category, Gender, Hobby, Profile,Complaint,Like,Religion,ProfilePhotos],
      synchronize: true,
    })
    ,CategoryModule,GenderModule,HobbyModule,ProfileModule,ComplaintModule,ReligionModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
