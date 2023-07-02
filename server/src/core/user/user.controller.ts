import { Body, Controller, Get, Param, Post, Req, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { JwtAuthGuard } from "../../service/auth/guards/jwt.guard";
import jwt_decode from "jwt-decode";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getUsers(@Req() req: any) {
        const decoded: any =
            req.headers?.authorization?.split(" ")?.[1] !== "null"
                ? jwt_decode(req.headers?.authorization?.split(" ")?.[1])
                : {};

        return this.userService.getUsers(decoded?.sub);
    }

    @Get("/likes")
    getLikeUsers(@Req() req: any) {
        const decoded: any =
            req.headers?.authorization?.split(" ")?.[1] !== "null"
                ? jwt_decode(req.headers?.authorization?.split(" ")?.[1])
                : {};
        return this.userService.getLikeUsers(decoded?.sub);
    }

    @UseGuards(JwtAuthGuard)
    @Get("/:username")
    getUser(@Param("username") username: any) {
        return this.userService.getUserProfile(username);
    }

    @UseGuards(JwtAuthGuard)
    @Post("/follow")
    followUser(@Req() req: any, @Body() body: any) {
        return this.userService.followUser(body.id, req.user);
    }
}
