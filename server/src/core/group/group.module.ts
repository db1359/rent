import { Module } from "@nestjs/common";
import { GroupController } from "./group.controller";
import { GroupService } from "./group.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Group, GroupSchema } from "./group.schema";
import { FeedModule } from "../feed/feed.module";
import { UserModule } from "../user/user.module";

@Module({
    imports: [MongooseModule.forFeature([{ name: Group.name, schema: GroupSchema }]), FeedModule, UserModule],
    controllers: [GroupController],
    providers: [GroupService],
})
export class GroupModule {}
