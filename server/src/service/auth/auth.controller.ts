import { Body, Controller, Get, Post, Req, UseGuards, ValidationPipe } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./guards/local.guard";
import { IUser } from "../../core/user/user.schema";
import { RegisterDto } from "../../core/user/types/register.type";
import { JwtAuthGuard } from "./guards/jwt.guard";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post("/login")
    async login(@Req() req: any) {
        return this.authService.login(req.user as IUser);
    }

    @Post("/register")
    async register(@Body(new ValidationPipe()) user: RegisterDto) {
        return this.authService.register(user);
    }

    @UseGuards(JwtAuthGuard)
    @Get("/profile")
    async profile(@Req() req: any) {
        return this.authService.profile(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Post("/update")
    async updateProfile(@Body() body: any, @Req() req: any) {
        return this.authService.updateProfile({ ...body, _id: req.user.id });
    }

    @Post("/email-confirm")
    async confirmEmail(@Body() body: any) {
        return this.authService.confirmEmail(body);
    }
}
