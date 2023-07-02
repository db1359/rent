import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { IUser } from "src/core/user/user.schema";
import { UserService } from "../../../core/user/user.service";
import { jwtConstants } from "../constants";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        });
    }

    async validate(validationPayload: { email: string; sub: string }): Promise<IUser | null> {
        return this.userService.userValidate({ email: validationPayload.email });
    }
}
