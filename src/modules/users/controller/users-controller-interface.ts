import { BaseResponse } from "src/dto";

export interface IUsersController {
    getList(): BaseResponse;
}