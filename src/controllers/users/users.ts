import { Controller, Get } from '@nestjs/common';
import { UserService } from "../../services/index"

@Controller("users")
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get("/list")
  getHello(): any[] {
    return this.userService.getList();
  }
}
