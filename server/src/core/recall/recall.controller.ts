import { Body, Controller, Get, Param, Post, Query, Req, UseGuards } from "@nestjs/common";
import { RecallService } from "./recall.service";
import { JwtAuthGuard } from "../../service/auth/guards/jwt.guard";

@Controller("recall")
export class RecallController {
    constructor(private readonly recallService: RecallService) {}

    @UseGuards(JwtAuthGuard)
    @Post("/create")
    async createRecall(@Body() body: any, @Req() req: any) {
        return this.recallService.createRecall(body, req.user);
    }

    @Get("/all")
    async getAllRecalls() {
        return this.recallService.getAllRecall();
    }

    @Get()
    async getRecalls(@Query() query: any) {
        return this.recallService.getRecalls(query);
    }

    @Get("/:id")
    async getRecall(@Param("id") id: string) {
        return this.recallService.getRecall(id);
    }

    @Post("/sign")
    async signRecall(@Body() body: any) {
        return this.recallService.signRecall(body);
    }
}
