import { Controller } from '@nestjs/common';
import { HobbyService } from './hobby.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateHobbyDto, updateHobby } from './dto/create-hobby.dto';

@Controller()
export class HobbyController {
  constructor(private hobbyService: HobbyService) {
  }

  @MessagePattern({ cmd: 'create-hobby' })
  createHobby(data: CreateHobbyDto) {
    return this.hobbyService.createHobby(data);
  }

  @MessagePattern({ cmd: 'get-hobbies' })
  getHobbies(id: number) {
    return this.hobbyService.getHobbies(id);
  }

  @MessagePattern({ cmd: 'update-hobby' })
  updateHobbies(data: updateHobby) {
    return this.hobbyService.updateHobby(data);
  }

  @MessagePattern({ cmd: 'remove-hobby' })
  removeHobby(id: number) {
    return this.hobbyService.removeHobby(id);
  }
}