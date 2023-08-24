import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import * as urlMetadata from "url-metadata";
import { Feed, IFeed } from "./feed.schema";
import { IUser, User } from "../user/user.schema";
import { CommentService } from "../comment/comment.service";

@Injectable()
export class FeedService {
    constructor(
        @InjectModel(Feed.name) private feedModel: Model<IFeed>,
        @InjectModel(User.name) private userModel: Model<IUser>,
        private readonly commentService: CommentService,
    ) {}

    async uglify(text: string) {
        const re = new RegExp("@[a-zA-Z0-9\\-]+");
        return text.replace(re, (username) => {
            return '<a href="' + process.env.FRONTEND_URL + "/" + username.slice(1) + '">' + username + "</a>";
        });
    }

    async createFeed(attr, user: any) {
        const re = new RegExp("@[a-zA-Z0-9\\-]+");

        if (attr.post.match(re)) {
            attr.post = await this.uglify(attr.post);
        }

        if (!!attr.repost) {
            attr.repost = new mongoose.Types.ObjectId(attr.repost);
        }

        await this.userModel.findOneAndUpdate({ _id: user.id }, { $inc: { feeds: 1 } });
        return this.feedModel.create({
            feed: attr.post,
            image: attr.image,
            link: attr.link,
            repost: attr?.repost,
            preview: {
                image: attr?.meta?.image,
                title: attr?.meta?.title,
                description: attr?.meta?.description,
                domain: attr?.meta?.domain,
                link: attr.link,
            },
            author: user["id"],
            createdAt: Date.now(),
        });
    }

    async getFeeds(user: any) {
        const urs = await this.userModel.findOne({ _id: user._id });
        const ids = [user._id, ...urs.followings];
        return this.feedModel
            .find({
                author: {
                    $in: ids,
                },
            })
            .populate([
                {
                    path: "author",
                },
                {
                    path: "repost",
                    populate: {
                        path: "author",
                    },
                },
            ])
            .sort({ createdAt: -1 });
    }

    async getGroupFeeds(ids) {
        return this.feedModel
            .find({
                _id: {
                    $in: ids,
                },
            })
            .populate([
                {
                    path: "author",
                },
                {
                    path: "repost",
                    populate: {
                        path: "author",
                    },
                },
            ])
            .sort({ createdAt: -1 });
    }

    async getFeed(id: string) {
        const cmt = await this.commentService.getComments(id);
        return this.feedModel
            .findOne({
                _id: new mongoose.Types.ObjectId(id),
            })
            .populate([
                {
                    path: "author",
                },
                {
                    path: "repost",
                    populate: {
                        path: "author",
                    },
                },
            ])
            .then((r: any) => {
                return { ...r._doc, cmts: cmt };
            });
    }

    async getPopulateFeeds(user: any) {
        const urs = await this.userModel.findOne({ _id: user._id });
        const ids = [user._id, ...urs.followings];
        return this.feedModel
            .find({
                author: {
                    $in: ids,
                },
            })
            .populate([
                {
                    path: "author",
                },
                {
                    path: "repost",
                    populate: {
                        path: "author",
                    },
                },
            ])
            .sort({ likesLength: -1, createdAt: -1 })
            .limit(5);
    }

    async getMyFeeds(id: string) {
        return this.feedModel
            .find({
                author: { _id: new mongoose.Types.ObjectId(id) },
            })
            .populate([
                {
                    path: "author",
                },
                {
                    path: "repost",
                    populate: {
                        path: "author",
                    },
                },
            ])
            .sort({ createdAt: -1 });
    }

    async likeFeed(id: string, user: any) {
        const feed = await this.feedModel.findOne({ _id: new mongoose.Types.ObjectId(id) });
        let likes = [];
        let likesLength = 0;
        if (feed.likes.includes(user.id)) {
            likes = feed.likes.filter((i) => i.toString() !== user.id.toString());
            likesLength = feed.likesLength - 1;
        } else {
            likes = [user.id, ...feed.likes];
            likesLength = feed.likesLength + 1;
        }
        feed.likes = likes;
        feed.likesLength = likesLength;
        return feed.save();
    }

    public async dFeed(id: string): Promise<any> {
        return this.feedModel.deleteOne({ _id: id }).exec();
    }

    async parseLink(link: string) {
        console.log(link);
        return urlMetadata(link)
            .then((r) => {
                console.log(r);
                return r;
            })
            .catch((e) => {
                throw new BadRequestException(e);
            });
    }
}
