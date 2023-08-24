import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import { IComment, Comment } from "./comment.schema";
import { Feed, IFeed } from "../feed/feed.schema";

@Injectable()
export class CommentService {
    constructor(
        @InjectModel(Comment.name) private commentModel: Model<IComment>,
        @InjectModel(Feed.name) private feedModel: Model<IFeed>,
    ) {}

    async createComment(comment, feed, user) {
        if (!comment) {
            throw new BadRequestException("no exist comment");
        }
        const cmt = new this.commentModel();
        cmt.author = user["id"];
        cmt.comment = comment;
        const fd = await this.feedModel.findOne({ _id: new mongoose.Types.ObjectId(feed) });
        if (!fd) {
            throw new BadRequestException("no exist feed");
        }
        cmt.feed = fd;
        fd.comments = fd.comments + 1;
        fd.save();
        return cmt.save();
    }

    async getComments(feed) {
        return this.commentModel
            .find({
                feed: new mongoose.Types.ObjectId(feed),
            })
            .populate(["author"])
            .sort({ updateAt: -1 });
    }
}
