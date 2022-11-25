import { genSalt, hash, compare } from "bcrypt";
import { IUser } from "../interfaces";

export async function generatePasswordHash(plainPassword: string, saltRounds: number = 10): Promise<string> {
    const salt = await genSalt(saltRounds);
    const hashedPassword = await hash(plainPassword, salt);
    return hashedPassword;
}

export async function verifyPassword(plainPassword: string, storedPassword: string): Promise<boolean> {
    return compare(plainPassword, storedPassword);
}