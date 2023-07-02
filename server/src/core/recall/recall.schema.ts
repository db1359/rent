import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "../user/user.schema";
import { Directory } from "../directory/directory.schema";

export type IRecall = Recall & Document;

@Schema()
export class Recall {
    @Prop({ type: mongoose.Types.ObjectId, ref: User.name })
    author: User;

    @Prop({ type: mongoose.Types.ObjectId, ref: Directory.name })
    directory: Directory;

    @Prop()
    state: string;

    @Prop()
    title: string;

    @Prop({ default: 10 })
    signaturesRequire: number;

    @Prop()
    case: string;

    @Prop()
    content: string;

    @Prop()
    files: string[];

    @Prop({
        type: [
            raw({
                firstname: { type: String },
                lastname: { type: String },
                email: { type: String },
                phone: { type: String },
                address: { type: String },
                state: { type: String },
                zipcode: { type: String },
            }),
        ],
    })
    signatures: Record<any, any>[];

    @Prop({ default: true })
    isActive: boolean;

    @Prop({ type: Date })
    createdAt: Date;

    @Prop({ type: Date, default: Date.now })
    updateAt: Date;
}

export const RecallSchema = SchemaFactory.createForClass(Recall);
