export interface UsersInterface {
    create():void
    update():void
    delete():void
    getList():{id: string, name: string, email: string}[]
}