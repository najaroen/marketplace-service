export interface IBaseResponse {
    status:number;
    message:string;
    data?:Object;
}

export class BaseResponse implements IBaseResponse {
    public status:number = 200
    public message:string = "OK"
    public data?: Object


    constructor(params: Partial<BaseResponse>) {
        Object.assign(this, params);
    }


}