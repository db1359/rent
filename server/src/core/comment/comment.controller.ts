import { Body, Controller, Get, Param, Post, Query, Req, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/service/auth/guards/jwt.guard";
import { CommentService } from "./comment.service";

@Controller("comment")
export class CommentController {
    constructor(private readonly commentService: CommentService) {}

    @UseGuards(JwtAuthGuard)
    @Post("/create")
    async createComment(@Body() body: any, @Req() req: any) {
        return this.commentService.createComment(body.comment, body.feed, req.user);
    }

    @Get("/:id")
    async getComments(@Param("id") id: string) {
        return this.commentService.getComments(id);
    }
}
