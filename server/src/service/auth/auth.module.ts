import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";

import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserModule } from "../../core/user/user.module";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { jwtConstants } from "./constants";
import { LocalStrategy } from "./strategies/local.strategy";
import { MailModule } from "../mail/mail.module";

@Module({
    imports: [
        UserModule,
        PassportModule.register({ defaultStrategy: "jwt", session: false }),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: "30 days" },
        }),
        MailModule,
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, LocalStrategy],
})
export class AuthModule {}
