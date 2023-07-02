import { Module } from "@nestjs/common";
import { FeedController } from "./feed.controller";
import { FeedService } from "./feed.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Feed, FeedSchema } from "./feed.schema";
import { User, UserSchema } from "../user/user.schema";
import { CommentModule } from "../comment/comment.module";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Feed.name, schema: FeedSchema },
            { name: User.name, schema: UserSchema },
        ]),
        CommentModule,
    ],
    controllers: [FeedController],
    providers: [FeedService],
    exports: [FeedService],
})
export class FeedModule {}
