import { UserDomain } from "../../domain/user.domain";

export interface IGetUserApplication {
    getList():UserDomain[]
    getById(id: string):UserDomain
    getByEmail(email: string):UserDomain
}
