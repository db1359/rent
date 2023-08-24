import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import { Group, IGroup } from "./group.schema";
import { FeedService } from "../feed/feed.service";
import { UserService } from "../user/user.service";

@Injectable()
export class GroupService {
    constructor(
        @InjectModel(Group.name) private groupModel: Model<IGroup>,
        private readonly feedService: FeedService,
        private readonly userService: UserService,
    ) {}

    async getMyGroupsService(user) {
        return this.groupModel.find({ author: user });
    }

    async getGroupService(slug: string, user: any) {
        return this.groupModel.findOne({ slug: slug }).populate(["author", "requests", "members"]);
    }

    async getGroupFeedsService(slug: string) {
        const group = await this.groupModel.findOne({ slug: slug });

        return this.feedService.getGroupFeeds(group.feeds);
    }

    async createGroupService(params, user) {
        return this.groupModel.create({
            author: user,
            ...params,
        });
    }

    async createGroupFeedService(params, user) {
        const feed = await this.feedService.createFeed(params, user);
        return this.groupModel.findOneAndUpdate(
            { _id: new mongoose.Types.ObjectId(params.group) },
            { $push: { feeds: feed } },
        );
    }

    async deleteGroupService(id, user) {
        const group = await this.groupModel.findOne({ _id: id }).populate("author");

        if (group.author.username === user.username) {
            console.log(group.id);
            await this.groupModel.deleteOne(group._id);
        }

        return { success: true };
    }

    async deleteGroupFeedService(group, id, user) {
        await this.groupModel.findOneAndUpdate({ _id: group }, { feed: { $pop: id } });
        return this.feedService.dFeed(id);
    }

    async requestAccessService(body, user) {
        return this.groupModel.findOneAndUpdate({ slug: body.slug }, { $push: { requests: user } });
    }

    async approveAccessService(body, user) {
        const member = new mongoose.Types.ObjectId(body.member);
        return this.groupModel.findOneAndUpdate(
            { _id: body.id },
            {
                $pullAll: { requests: [member] },
                $push: { members: { _id: member } },
            },
        );
    }

    async removeMemberService(body, user) {
        const member = new mongoose.Types.ObjectId(body.member);
        return this.groupModel.findOneAndUpdate(
            { _id: body.id },
            {
                $pullAll: { members: [member] },
            },
        );
    }

    async getChannels(user) {
        const mGroups = await this.groupModel.find({ members: { $in: { _id: user._id } } });
        const rGroups = await this.groupModel.find({ requests: { $in: { _id: user._id } } });

        return {
            requests: rGroups,
            members: mGroups,
        };
    }
}
