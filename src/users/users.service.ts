import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import CreateUserDto from './DTOs/create-user.dto';
import { hash, genSalt } from 'bcrypt';

@Injectable()
export class UsersService {
    private readonly pepper: string;

    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
    ) {
        this.pepper = process.env.PASSWORD_PEPPER!;
    }

    async getUsers(): Promise<UserDocument[]> {
        return this.userModel.find().exec();
    }

    async createUser(createUserDto: CreateUserDto): Promise<UserDocument> {
        const salt = await genSalt(10);
        const pepperedPassword = createUserDto.password + this.pepper;
        const hashedPassword = await hash(pepperedPassword, salt);
        const user = await this.userModel.create({
            ...createUserDto,
            password: hashedPassword,
            salt,
        });
        
        return user;
    }
}
