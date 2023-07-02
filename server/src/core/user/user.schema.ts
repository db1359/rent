import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

export type IUser = User & Document;

@Schema()
export class User {
    @Prop({ required: true, unique: true })
    username: string;

    @Prop()
    firstname: string;

    @Prop()
    lastname: string;

    @Prop()
    description: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true, unique: true })
    eToken: string;

    @Prop({ default: false })
    emailVerified: boolean;

    @Prop({ required: true, unique: true })
    phone: string;

    @Prop({ default: false })
    phoneVerified: boolean;

    @Prop({ required: true, trim: true })
    password: string;

    @Prop()
    website: string;

    @Prop()
    photo: string;

    @Prop()
    cover: string;

    @Prop()
    donate: string;

    @Prop({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: User.name }],
    })
    followers: User[];

    @Prop({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: User.name }],
    })
    followings: User[];

    @Prop({
        default: 0,
    })
    feeds: number;

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

export const UserSchema = SchemaFactory.createForClass(User);
