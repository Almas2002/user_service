import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfileService } from './profile.service';
import { GetProfileQueryInterface, IPagination } from './interfaces/get-profile-query.interface';
import { LikeProfileDto } from './dto/like-profile.dto';
import { AddImagesDto } from './dto/add-images.dto';
import { UpdateAvatarDto } from './dto/update-avatar.dto';
import { RemoveImageDto } from './dto/remove-image.dto';

@Controller()
export class ProfileController {
  constructor(private profileService: ProfileService) {
  }

  @MessagePattern({ cmd: 'create-profile' })
  createProfile(data: CreateProfileDto) {
    return this.profileService.createProfile(data);
  }

  @MessagePattern({ cmd: 'me' })
  getUserProfile(id: number) {
    return this.profileService.getUserProfile(id);
  }

  @MessagePattern({ cmd: 'get-profiles' })
  getProfiles(data: GetProfileQueryInterface) {
    return this.profileService.getProFiles(data);
  }

  @MessagePattern({ cmd: 'like-profile' })
  likeProfile(data: LikeProfileDto) {
    return this.profileService.likeProfile(data);
  }

  @MessagePattern({ cmd: 'block-profile' })
  blockProfile(profileId: number) {
    return this.profileService.blockUser(profileId);
  }

  @MessagePattern({ cmd: 'get-blocked-profiles' })
  getBlockedProfiles(pagination: IPagination) {
    return this.profileService.getBlockedUsers(pagination);
  }

  @MessagePattern({ cmd: 'add-image' })
  addImage(dto: AddImagesDto) {
    return this.profileService.addImagesToProfile(dto);
  }

  @MessagePattern({ cmd: 'update-avatar' })
  updateAvatar(dto: UpdateAvatarDto) {
    return this.profileService.updateAvatar(dto.userId, dto.photoId);
  }

  @MessagePattern({ cmd: 'remove-image' })
  removeImage(dto:RemoveImageDto) {
    return this.profileService.deleteImage(dto);
  }

}