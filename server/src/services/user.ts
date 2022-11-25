import { IUser } from "../schemas"
import { DtoNewUser, DtoUpdateUser } from "../dtos";

export interface IUserService {
    getById(id: string): Promise<IUser | null>;
    getByEmail(email: string): Promise<IUser | null>;
    getAll(): Promise<IUser[]>;

    create(user: DtoNewUser): Promise<IUser>;
    update(id: string, user: DtoUpdateUser): Promise<IUser | null>;
    delete(id: string): Promise<boolean>;
}
