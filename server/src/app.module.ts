import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import * as autopopulate from "mongoose-autopopulate";
import "dotenv/config";
import { UserModule } from "./core/user/user.module";
import { AuthModule } from "./service/auth/auth.module";
import { MailModule } from "./service/mail/mail.module";
import { FeedModule } from "./core/feed/feed.module";
import { FileModule } from "./core/file/file.module";
import { CommentModule } from "./core/comment/comment.module";
import { RecallModule } from "./core/recall/recall.module";
import { DirectoryModule } from "./core/directory/directory.module";
import { GroupModule } from "./core/group/group.module";

@Module({
    imports: [
        MongooseModule.forRoot(process.env.MONGODB_URL || "", {
            connectionFactory: (connection) => {
                connection.plugin(autopopulate);
                return connection;
            },
        }),
        UserModule,
        AuthModule,
        MailModule,
        FeedModule,
        FileModule,
        CommentModule,
        RecallModule,
        DirectoryModule,
        GroupModule,
    ],
})
export class AppModule {}
