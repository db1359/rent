import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import { Directory, IDirectory } from "./directory.schema";

@Injectable()
export class DirectoryService {
    constructor(@InjectModel(Directory.name) private directoryModel: Model<IDirectory>) {}

    async createDirectory(attr, user) {
        attr.author = user.id;
        attr.slug = attr.name
            .replace(/^\s+|\s+$/g, "")
            .replace(" ", "-")
            .toLowerCase();
        attr.createdAt = new Date();
        return this.directoryModel.create({ ...attr });
    }

    async updateDirectory(attr) {
        return this.directoryModel.findOneAndUpdate(
            {
                _id: attr._id,
            },
            { ...attr },
            { new: true, projection: Object.keys(attr) },
        );
    }

    async getAllDirectories(state: string) {
        return this.directoryModel.find().sort({ createdAt: -1 });
    }

    async getDirectory(slug) {
        return this.directoryModel.findOne({ slug: slug }).populate(["author", "followers"]);
    }

    async getMyDirectories(user) {
        return this.directoryModel.find({ author: user.id });
    }

    async followDir(id: string, user: any) {
        const dir = await this.directoryModel.findOne({ _id: new mongoose.Types.ObjectId(id) });
        if (dir?.followers.toString().includes(user._id.toString())) {
            dir.followers = dir.followers.filter((i: any) => i.toString() !== user._id.toString());
        } else {
            dir.followers.push(user.id);
        }
        return dir.save();
    }
}
