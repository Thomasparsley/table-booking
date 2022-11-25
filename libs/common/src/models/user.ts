export interface DtoNewUser {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface DtoUpdateUser extends DtoNewUser { }
