import { Body, Controller, Get, Param, Post, Query, Req, UseGuards } from "@nestjs/common";
import { DirectoryService } from "./directory.service";
import { JwtAuthGuard } from "../../service/auth/guards/jwt.guard";

@Controller("directory")
export class DirectoryController {
    constructor(private readonly directoryService: DirectoryService) {}

    @Get()
    async getDirectories(@Query() query: any) {
        console.log(query);
        return this.directoryService.getAllDirectories();
    }

    @UseGuards(JwtAuthGuard)
    @Get("/my")
    async getMyDirectories(@Req() req: any) {
        return this.directoryService.getMyDirectories(req.user);
    }

    @Get("/:slug")
    async getDirectory(@Param("slug") slug: string) {
        return this.directoryService.getDirectory(slug);
    }

    @UseGuards(JwtAuthGuard)
    @Post("/create")
    async createDirectory(@Body() body: any, @Req() req: any) {
        return this.directoryService.createDirectory(body, req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Post("/update")
    async updateDirectory(@Body() body: any) {
        return this.directoryService.updateDirectory(body);
    }

    @UseGuards(JwtAuthGuard)
    @Post("/follow")
    followDir(@Req() req: any, @Body() body: any) {
        return this.directoryService.followDir(body.id, req.user);
    }
}
