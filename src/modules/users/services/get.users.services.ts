import { Injectable } from '@nestjs/common';
import { IGetUserService  } from "../interfaces"
import { UserDomain } from '../domain/user.domain';

@Injectable()
export class GetUserService implements IGetUserService  {

    getList(): UserDomain[] { 
        return [
            {id:"efaf6f30-8e94-4a21-8e7c-1ba82df9fe89", name: "Chapman", email:"Chapman@htoal.com"},
            {id:"efaf6f30-8e94-4a21-8e7c-1ba82df9fe89", name: "Lilliana Emilie", email:"Lilliana@htoal.com"},
            {id:"efaf6f30-8e94-4a21-8e7c-1ba82df9fe89", name: "Arnolds Pooja", email:"Arnolds@htoal.com"},
            {id:"efaf6f30-8e94-4a21-8e7c-1ba82df9fe89", name: "Eutropia Naja", email:"Eutropia@htoal.com"},
            {id:"efaf6f30-8e94-4a21-8e7c-1ba82df9fe89", name: "Jonas Tomi", email:"Jonas@htoal.com"}
        ];
    }

    getByEmail(email: string): UserDomain {
       return {id:"efaf6f30-8e94-4a21-8e7c-1ba82df9fe89", name: "Lilliana Emilie", email:"Lilliana@htoal.com"}
    }

    getById(id: string):UserDomain {
        return {id:"efaf6f30-8e94-4a21-8e7c-1ba82df9fe89", name: "Lilliana Emilie", email:"Lilliana@htoal.com"}
    }

}