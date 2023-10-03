import { Module } from '@nestjs/common';
import { GetUserService } from "./modules/users/services/get.users.services"
import { UsersController } from "./modules/users/controller/user.controller"

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [],
})
export class AppModule {}
