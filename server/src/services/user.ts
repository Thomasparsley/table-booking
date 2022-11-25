import { IUser } from "../interfaces";
import { DtoNewUser, DtoUpdateUser } from "../dtos";
import { Types } from "mongoose";

/**
 * Interface representing a user service capable of serving and otherwise managing the user store
 */
export interface IUserService {
    /**
     * Gets a user by id. Returns null if the given user cannot be found.
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
    /**
     * 
     */
    update(id: Types.ObjectId, user: DtoUpdateUser): Promise<IUser | null>;
    /**
     * Deletes a user given their id. Returns the user deleted if successful or null if the user cannot be found.
     * @param id The id of the user.
     */
    delete(id: Types.ObjectId): Promise<IUser | null>;
}
