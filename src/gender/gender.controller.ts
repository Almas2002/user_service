import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateGenderDto } from './dto/create-gender.dto';
import { GenderService } from './gender.service';

@Controller()
export class GenderController {
  constructor(private genderService:GenderService) {}

  @MessagePattern({cmd:'create-gender'})
  createGender(data:CreateGenderDto){
    return this.genderService.createGender(data)
  }

  @MessagePattern({cmd:'get-genders'})
  getGenders(){
    return this.genderService.getGenders()
  }

}