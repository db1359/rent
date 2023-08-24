import { ForbiddenException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { UserService } from "../../core/user/user.service";
import * as bcrypt from "bcrypt";
import { createToken } from "src/utils/helper/token.helper";
import { MailService } from "../mail/mail.service";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
        private readonly mailService: MailService,
    ) {}

    async validate(email, pass) {
        const validate = await this.userService.userValidate({ email: email });

        if (!validate) {
            return null;
        }

        const passwordIsValid = bcrypt.compareSync(pass, validate.password);

        if (passwordIsValid) {
            return this.userService.getUser(validate["_id"]);
        } else {
            return null;
        }
    }

    async login(user: any) {
        if (!user.isActive) {
            throw new ForbiddenException("Your account in review now. Please contact the support");
        }

        const payload = {
            email: user.email,
            sub: user["id"],
        };

        return {
            user,
            access_token: this.jwtService.sign(payload),
        };
    }

    async register(user) {
        const token = createToken();
        const u = await this.userService.create({
            ...user,
            eToken: token,
            isActive: true,
            createdAt: Date.now(),
        });

        if (!!u) {
            try {
                await this.mailService.emailVerifyEmail(u.email, u.firstname, token);
            } catch (e) {
                console.warn(e);
            }
        }

        return { success: true };
    }

    async profile(user) {
        return this.userService.getUser(user.id);
    }

    async updateProfile(attr) {
        return this.userService.updateUser(attr);
    }

    async confirmEmail(attr) {
        const user: any = await this.userService.userValidate({ eToken: attr.token });

        return this.userService.updateUser({ _id: user._id, emailVerified: true, eToken: createToken() });
    }
}
