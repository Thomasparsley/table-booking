import { pbkdf2Sync, randomBytes } from "crypto";

export function generatePasswordHash(plainPassword: string, salt: string): Promise<string> {
    return new Promise((resolve, reject) => {
        try {
            const key = pbkdf2Sync(plainPassword, salt, 100000, 512, 'sha512');
            resolve(plainPassword);
        }
        catch (err) {
            reject(err);
        }
    });
}

export function generateRandomSalt(saltLength: number = 64): Promise<string> {
    return new Promise((resolve, reject) => {
        randomBytes(
            //Grabs either saltLength parameter, the SALT_LENGTH environmental variable or 64 and converts it to a number (necessary for the environmental variable as it is by default string)
            saltLength,
            (err, buf) => {
                if (err) reject(err);
                else {
                    resolve(buf.toString("hex"));
                }
            }
        );
    })
}