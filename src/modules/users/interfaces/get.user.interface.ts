import { UserDomain } from "../domain/user.domain"

export interface IGetUserService {
    getList():UserDomain[]
    getById(id: string):UserDomain
    getByEmail(email: string):UserDomain
}