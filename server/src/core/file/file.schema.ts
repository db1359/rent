import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type IFile = File & Document;

@Schema()
export class File {
    @Prop()
    provider: string;

    @Prop()
    size: number;

    @Prop()
    key: string;

    @Prop()
    url: string;

    @Prop()
    type: string;

    @Prop({ default: true })
    isActive: boolean;
}

export const FileSchema = SchemaFactory.createForClass(File);
