import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "../user/user.schema";
import { Feed } from "../feed/feed.schema";

export type IGroup = Group & Document;

@Schema()
export class Group {
    @Prop({ type: String })
    title: string;

    @Prop({ type: String, unique: true })
    slug: string;

    @Prop({ type: String })
    avatar: string;

    @Prop({ type: String })
    cover: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
    author: User;

    @Prop({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: Feed.name }],
    })
    feeds: Feed[];

    @Prop({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: User.name }],
    })
    requests: User[];

    @Prop({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: User.name }],
    })
    members: User[];

    @Prop({ default: true })
    isActive: boolean;

    @Prop({ type: Date })
    createdAt: Date;

    @Prop({ type: Date, default: Date.now })
    updateAt: Date;
}

export const GroupSchema = SchemaFactory.createForClass(Group);
