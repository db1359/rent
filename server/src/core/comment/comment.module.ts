import { Module } from "@nestjs/common";
import { CommentController } from "./comment.controller";
import { CommentService } from "./comment.service";
import { Feed, FeedSchema } from "../feed/feed.schema";
import { User, UserSchema } from "../user/user.schema";
import { Comment, CommentSchema } from "./comment.schema";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Comment.name, schema: CommentSchema },
            { name: Feed.name, schema: FeedSchema },
            { name: User.name, schema: UserSchema },
        ]),
    ],
    controllers: [CommentController],
    providers: [CommentService],
    exports: [CommentService],
})
export class CommentModule {}
