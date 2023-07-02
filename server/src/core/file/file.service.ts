import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import * as AWS from "aws-sdk";
import { Model } from "mongoose";
import { v4 as uuid } from "uuid";
import { IFile } from "./file.schema";

@Injectable()
export class FileService {
    constructor(@InjectModel("File") private fileModel: Model<IFile>) {}

    AWS_S3_BUCKET = process.env.AWS_S3_BUCKET_NAME;
    s3 = new AWS.S3({
        accessKeyId: process.env.AWS_S3_ACCESS_KEY,
        secretAccessKey: process.env.AWS_S3_KEY_SECRET,
    });

    async uploadFile(file: any) {
        const fileName = uuid();
        const params = {
            Bucket: this.AWS_S3_BUCKET,
            Key: String(fileName),
            Body: file.buffer,
            ACL: "public-read",
            ContentType: file.mimetype,
            ContentDisposition: "inline",
            CreateBucketConfiguration: {
                LocationConstraint: "ap-south-1",
            },
        };

        return this.s3
            .upload(params)
            .promise()
            .then(async (data) => {
                const newFile = await new this.fileModel({
                    provider: "s3bucket",
                    size: file.size,
                    key: data.Key,
                    url: data.Location,
                    type: file.mimetype,
                    isActive: true,
                });

                return newFile.save().catch((err: any) => {
                    return new HttpException(err, 409);
                });
            })
            .catch((err) => {
                return err;
            });
    }
}
