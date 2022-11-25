import { IUser } from "../schemas"

export interface IUserService {
    getById(id: string): Promise<IUser>;
    getAll(): Promise<IUser[]>;
}