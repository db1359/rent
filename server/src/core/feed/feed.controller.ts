import { Body, Controller, Get, Param, Post, Query, Req, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/service/auth/guards/jwt.guard";
import { FeedService } from "./feed.service";

@Controller("feed")
export class FeedController {
    constructor(private readonly feedService: FeedService) {}

    @UseGuards(JwtAuthGuard)
    @Post("/create")
    async createFeed(@Body() body: any, @Req() req: any) {
        return this.feedService.createFeed(body, req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getFeeds(@Req() req: any) {
        return this.feedService.getFeeds(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get("/single/:id")
    async getFeed(@Param("id") id: string) {
        return this.feedService.getFeed(id);
    }

    @UseGuards(JwtAuthGuard)
    @Get("/populate")
    async getPopulateFeeds(@Req() req: any) {
        return this.feedService.getPopulateFeeds(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get("/my")
    async getMyFeeds(@Req() req: any, @Query() query: any) {
        return this.feedService.getMyFeeds(query.id);
    }

    @UseGuards(JwtAuthGuard)
    @Post("/like")
    async likeFeed(@Body() body: any, @Req() req: any) {
        return this.feedService.likeFeed(body.id, req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Post("/delete")
    async dFeed(@Body() body: any): Promise<any> {
        return this.feedService.dFeed(body.id);
    }

    @Get("/link")
    async parseLink(@Query() query: any) {
        return this.feedService.parseLink(query.link);
    }
}
