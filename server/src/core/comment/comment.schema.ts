import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "../user/user.schema";
import { Feed } from "../feed/feed.schema";

export type IComment = Comment & Document;

@Schema()
export class Comment {
    @Prop({ required: true })
    comment: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Feed.name })
    feed: Feed;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
    author: User;

    @Prop({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: User.name }],
    })
    likes: User[];

    @Prop({ default: true })
    isActive: boolean;

    @Prop({ type: Date })
    createdAt: Date;

    @Prop({ type: Date, default: Date.now })
    updateAt: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
