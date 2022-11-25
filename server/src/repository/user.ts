import { IUser, UserModel } from "../schemas";
import { DtoNewUser, DtoUpdateUser } from "../dtos";


export class UserRepository {
    constructor(
        private readonly userModel: typeof UserModel,
    ) { }

    async getById(id: string): Promise<IUser | null> {
        return await this.userModel.findOne({ _id: id });
    }

    async getByEmail(email: string): Promise<IUser | null> {
        return await this.userModel.findOne({ email: email });
    }

    async getAll(): Promise<IUser[]> {
        return await this.userModel.find();
    }

    async create(user: DtoNewUser): Promise<IUser> {
        const newUser = new this.userModel(user);
        return await newUser.save();
    }

    async update(id: string, user: DtoUpdateUser): Promise<IUser | null> {
        return await this.userModel.findOneAndUpdate({ _id: id }, user, { new: false });
    }

    async delete(id: string): Promise<IUser | null> {
        return await this.userModel.findOneAndDelete({ _id: id });
    }
}
