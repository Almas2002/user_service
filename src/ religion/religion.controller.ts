import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ReligionService } from './religion.service';

@Controller()
export class ReligionController {
  constructor(private religionService: ReligionService) {
  }

  @MessagePattern({ cmd: 'create-religion' })
  createReligion(value: string) {
    return this.religionService.createReligion(value);
  }

  @MessagePattern({ cmd: 'get-religions' })
  getReligions() {
    return this.religionService.getReligions();
  }
}