import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "../user/user.schema";

export type IDirectory = Directory & Document;

@Schema()
export class Directory {
    @Prop({ type: mongoose.Types.ObjectId, ref: User.name })
    author: User;

    @Prop()
    photo: string;

    @Prop()
    cover: string;

    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    judge: string;

    @Prop({ required: true, unique: true })
    slug: string;

    @Prop()
    city: string;

    @Prop()
    state: string;

    @Prop()
    license: string;

    @Prop({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: User.name }],
    })
    followers: User[];

    @Prop(
        raw({
            title: { type: String },
            content: { type: String },
            mType: { type: String },
            media: { type: String },
            judges: {
                type: [
                    {
                        uid: { type: String },
                        state: { type: String },
                        city: { type: String },
                        judge: { type: String },
                    },
                ],
            },
        }),
    )
    story: Record<any, any>;

    @Prop({ default: true })
    isActive: boolean;

    @Prop({ type: Date })
    createdAt: Date;

    @Prop({ type: Date, default: Date.now })
    updateAt: Date;
}

export const DirectorySchema = SchemaFactory.createForClass(Directory);
