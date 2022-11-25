import { IUser } from "../interfaces";
import { DtoNewUser, DtoUpdateUser } from "../dtos";
import { Types } from "mongoose";

/**
 * Interface representing a user service capable of serving and otherwise managing the user store
 */
export interface IUserService {
    /**
     * Gets a user by Id. Returns null if the given user cannot be found.
     * @param id The id of the user.
     */
    getById(id: Types.ObjectId): Promise<IUser | null>;
    /**
     * 
     */
    getByEmail(email: string): Promise<IUser | null>;
    getAll(): Promise<IUser[]>;
    addToken(id: Types.ObjectId, token: string): Promise<void>;
    removeToken(id: Types.ObjectId, token: string): Promise<boolean>;
    isTokenPresent(id: Types.ObjectId, token: string): Promise<boolean>;
    create(user: DtoNewUser): Promise<IUser>;
    update(id: string, user: DtoUpdateUser): Promise<IUser | null>;
    delete(id: string): Promise<boolean>;
}
