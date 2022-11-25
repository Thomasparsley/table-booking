import { IUser, UserModel } from "../schemas";

export class UserRepository {
    constructor(
        private readonly userModel: typeof UserModel,
    ) { }

    async getById(id: string): Promise<IUser | null> {
        return await this.userModel.findOne({ _id: id });
    }

    async getAll(): Promise<IUser[]> {
        return await this.userModel.find();
    }
}
