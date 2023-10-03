import { Module } from '@nestjs/common';
import { TYPES } from "./interfaces"
import { GetUserService } from "./services/get.users.services"
import { GetUserApplication } from "./application/get.users.application"
import { UsersController } from "../users/controller/user.controller"

const getUsersApplication = {
    provide: TYPES.applications.GetUserApplication,
    useClass:GetUserApplication 
}

const getUserService = {
    provide: TYPES.services.GetUserService,
    useClass: GetUserService 
}

@Module({
    imports: [],
    controllers:[UsersController],
    providers:[
        getUsersApplication,
        getUserService
    ],
    exports:[getUserService]
})
export class UsersModule {}