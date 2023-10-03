import { Controller, Get, HttpStatus, Inject, Param } from '@nestjs/common';
import { BaseResponse } from 'src/dto';
import { InternalServerException } from "../../../handler"
import { TYPES, IGetUserApplication } from "../interfaces"

@Controller("users")
export class UsersController {

    // constructor(
    //     @Inject(TYPES.applications.GetUserApplication)
    //     private getUserApplication:IGetUserApplication 
    // ){}

    @Get('/list')
    getList(): BaseResponse {
        try {
           return new BaseResponse({message:"", status: HttpStatus.OK, data: {}})      
        } catch (e:any) {
           throw new InternalServerException(e?.message) 
        }
    }

    @Get('/id/:id')
    getById(@Param('id') id: string): BaseResponse {
        try {
           return new BaseResponse({message:"", status: HttpStatus.OK, data: {}})      
        } catch (e:any) {
           throw new InternalServerException(e?.message) 
        }
    }

    @Get('/email/:email')
    getByEmail(@Param('email') email: string): BaseResponse {
        try {
           return new BaseResponse({message:"", status: HttpStatus.OK, data: {}})      
        } catch (e:any) {
           throw new InternalServerException(e?.message) 
        }
    }
}