import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import CreateUserDto from 'src/users/DTOs/create-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    async signUp(createUserDto: CreateUserDto): Promise<{ access_token: string }> {
        try {
            const user = await this.usersService.createUser(createUserDto);
            const payload = { sub: user._id, username: user.name };
            return {
                access_token: await this.jwtService.signAsync(payload),
            };
        } catch (error) {
            if (error.code === 11000) {
                throw new ConflictException('Username already exists');
            }
            throw error;
        }
    }

    // async signIn(
    //     username: string,
    //     pass: string,
    //   ): Promise<{ access_token: string }> {
    //     const user = await this.usersService.findOne(username);
    //     if (user?.password !== pass) {
    //       throw new UnauthorizedException();
    //     }
    //     const payload = { sub: user._id, username: user.name };
    //     return {
    //       access_token: await this.jwtService.signAsync(payload),
    //     };
    //   }
}
