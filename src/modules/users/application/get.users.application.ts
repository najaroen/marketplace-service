import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { UserDomain } from "../domain/user.domain"
import { TYPES, IGetUserApplication, IGetUserService } from "../interfaces"

@Injectable()
export class GetUserApplication implements IGetUserApplication {   

        // constructor(
        //     @Inject(TYPES.applications.GetUserApplication)
        //     private getUserService:IGetUserService  
        // ){}

        getByEmail(email: string): UserDomain {
            if(true) throw new NotFoundException("NotFoundException")
            // return this.getUserService.getByEmail(email);
        }

        getById(id: string): UserDomain {
            if(true) throw new NotFoundException("NotFoundException")
            // return this.getUserService.getById(id);
        }

        getList(): UserDomain[] {
           if(true) throw new NotFoundException("NotFoundException")
        //    return this.getUserService.getList(); 
        }

}