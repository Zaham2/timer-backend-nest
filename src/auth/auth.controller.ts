import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import CreateUserDto from '../users/DTOs/create-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signup')
    async signUp(@Body() createUserDto: CreateUserDto): Promise<{ access_token: string }> {
        console.log(createUserDto);
        return await this.authService.signUp(createUserDto);
    }
}
