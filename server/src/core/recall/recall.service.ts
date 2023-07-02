import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { IRecall, Recall } from "./recall.schema";
import mongoose, { Model } from "mongoose";
import { Directory } from "../directory/directory.schema";

@Injectable()
export class RecallService {
    constructor(@InjectModel(Recall.name) private recallModel: Model<IRecall>) {}

    async createRecall(attr: any, user: any) {
        attr.directory = new mongoose.Types.ObjectId(attr.directory);
        attr.createdAt = new Date();
        return this.recallModel.create({ ...attr, author: { _id: user.id } });
    }

    async getAllRecall() {
        return this.recallModel.find({}, ["state"]);
    }

    async getRecalls(query) {
        const filter: any = {};
        const match: any = {};
        if (!!query.state) {
            filter.state = query?.state?.toUpperCase();
        }
        if (!!query.slug) {
            match.slug = query?.slug?.toLowerCase();
        }
        return this.recallModel
            .find(filter)
            .populate("directory", {}, Directory.name, { ...match })
            .populate("author")
            .sort({ createdAt: -1 });
    }

    async getRecall(id) {
        return this.recallModel.findOne({ _id: new mongoose.Types.ObjectId(id) }).populate(["author", "directory"]);
    }

    async signRecall(attr) {
        return this.recallModel
            .findOneAndUpdate(
                { _id: new mongoose.Types.ObjectId(attr.id) },
                { $push: { signatures: { ...attr } } },
                { new: true },
            )
            .populate(["author"]);
    }
}
