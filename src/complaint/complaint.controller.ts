import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { ComplaintService } from './complaint.service';

@Controller()
export class ComplaintController {
  constructor(private complaintService:ComplaintService) {}
  @MessagePattern({cmd:"report-to-profile"})
  reportToProfile(dto:CreateComplaintDto){
    return this.complaintService.createComplaint(dto)
  }

  @MessagePattern({cmd:"get-user-of-reports"})
  getUserOfReports(profileId:number){
    return this.complaintService.getComplaint(profileId)
  }
}