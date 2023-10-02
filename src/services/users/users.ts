import { UsersInterface } from "src/interfaces/users/users";
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService implements UsersInterface {
    
    create():void {
        
    }

    update():void {
        
    }

    delete():void {
        
    }

    getList(): { id: string; name: string; email: string; }[] {
        return [
            {id:"efaf6f30-8e94-4a21-8e7c-1ba82df9fe89", name: "Chapman", email:"Chapman@htoal.com"},
            {id:"efaf6f30-8e94-4a21-8e7c-1ba82df9fe89", name: "Lilliana Emilie", email:"Lilliana@htoal.com"},
            {id:"efaf6f30-8e94-4a21-8e7c-1ba82df9fe89", name: "Arnolds Pooja", email:"Arnolds@htoal.com"},
            {id:"efaf6f30-8e94-4a21-8e7c-1ba82df9fe89", name: "Eutropia Naja", email:"Eutropia@htoal.com"},
            {id:"efaf6f30-8e94-4a21-8e7c-1ba82df9fe89", name: "Jonas Tomi", email:"Jonas@htoal.com"}
        ]
    }
}