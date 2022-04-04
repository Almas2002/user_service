import { Controller } from '@nestjs/common';
import { CategoryService } from './category.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateCategoryDto, updateCategory } from './dto/create-category.dto';

@Controller()
export class CategoryController {
  constructor(private categoryService: CategoryService) {
  }

  @MessagePattern({ cmd: 'create-category' })
  createCategory(data:CreateCategoryDto) {
      return this.categoryService.createCategory(data)
  }

  @MessagePattern({ cmd: 'update-category' })
  updateCategory(data:updateCategory) {
      return this.categoryService.updateCategory(data)
  }

  @MessagePattern({ cmd: 'remove-category' })
  removeCategory(id:number) {
      return this.categoryService.deleteCategory(id)
  }

  @MessagePattern({ cmd: 'get-categories' })
  getCategories(id:number) {
      return this.categoryService.getCategories(id)
  }

  @MessagePattern({ cmd: 'get-one-category' })
  getOneCategory(id:number) {
     return this.categoryService.getOneCategory(id)
  }

}