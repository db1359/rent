import { IsAlpha, IsEmail, IsNotEmpty, IsPhoneNumber, MinLength } from "class-validator";

export class RegisterDto {
    @IsNotEmpty()
    @MinLength(6)
    username: string;

    @IsAlpha()
    firstname: string;

    @IsAlpha()
    lastname: string;

    @IsPhoneNumber()
    phone: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}
