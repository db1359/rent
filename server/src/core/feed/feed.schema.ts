import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "../user/user.schema";

export type IFeed = Feed & Document;

@Schema()
export class Feed {
    @Prop({ required: true })
    feed: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
    author: User;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Feed.name })
    repost: Feed;

    @Prop()
    image: string;

    @Prop()
    link: string;

    @Prop(
        raw({
            image: {
                type: String,
            },
            title: {
                type: String,
            },
            description: {
                type: String,
            },
            domain: {
                type: String,
            },
            link: {
                type: String,
            },
        }),
    )
    preview: Record<any, any>;

    @Prop({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: User.name }],
    })
    likes: User[];

    @Prop({ default: 0 })
    likesLength: number;

    @Prop({ default: 0 })
    comments: number;

    @Prop({ default: true })
    isActive: boolean;

    @Prop({ type: Date })
    createdAt: Date;

    @Prop({ type: Date, default: Date.now })
    updateAt: Date;
}

export const FeedSchema = SchemaFactory.createForClass(Feed);
