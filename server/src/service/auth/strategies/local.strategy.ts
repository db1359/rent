import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({ usernameField: "email" });
    }

    async validate(email: string, password: string): Promise<boolean> {
        const user: any = await this.authService.validate(email, password);

        if (!user) {
            throw new UnauthorizedException();
        }

        if (!user.emailVerified) {
            throw new BadRequestException(
                "A verification email has been sent to your email. Please click to verify to sign in.",
            );
        }

        return user;
    }
}
