import { Body, Controller, Delete, Get, Param, Post, Req, UseGuards } from "@nestjs/common";
import { GroupService } from "./group.service";
import { JwtAuthGuard } from "../../service/auth/guards/jwt.guard";

@Controller("group")
export class GroupController {
    constructor(private readonly groupService: GroupService) {}

    @Get()
    async getGroups() {}

    @UseGuards(JwtAuthGuard)
    @Get("my")
    async getMyGroups(@Req() req: any) {
        return this.groupService.getMyGroupsService(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get("/:id")
    async getGroup(@Param("id") slug: string, @Req() req: any) {
        return this.groupService.getGroupService(slug, req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get("/feed/:id")
    async getGroupFeeds(@Param("id") slug: string) {
        return this.groupService.getGroupFeedsService(slug);
    }

    @UseGuards(JwtAuthGuard)
    @Post("/create")
    async createGroup(@Body() body: any, @Req() req: any) {
        return this.groupService.createGroupService(body, req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Post("/feed/create")
    async createGroupFeed(@Body() body: any, @Req() req: any) {
        return this.groupService.createGroupFeedService(body, req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("/:id")
    async deleteGroup(@Param("id") id: string, @Req() req: any) {
        console.log(id);
        return this.groupService.deleteGroupService(id, req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("/feed/:group/:id")
    async deleteGroupFeed(@Param() params: any, @Req() req: any) {
        return this.groupService.deleteGroupFeedService(params.group, params.id, req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Post("/access")
    async accessGroupRequest(@Body() body: any, @Req() req: any) {
        return this.groupService.requestAccessService(body, req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Post("/approve")
    async approveGroupRequest(@Body() body: any, @Req() req: any) {
        return this.groupService.approveAccessService(body, req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Post("/remove")
    async removeMember(@Body() body: any, @Req() req: any) {
        return this.groupService.removeMemberService(body, req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get("/channels/abc")
    async getChannels(@Req() req: any) {
        return this.groupService.getChannels(req.user);
    }
}
