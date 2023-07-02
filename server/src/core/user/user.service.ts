import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import { IUser, User } from "./user.schema";
import { encryptString } from "../../utils/helper/bcrypt.helper";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<IUser>) {}

    async getUsers(id: string | undefined) {
        return this.userModel
            .find({ _id: { $nin: new mongoose.Types.ObjectId(id) } }, [
                "_id",
                "username",
                "email",
                "emailVerified",
                "firstname",
                "lastname",
                "description",
                "phone",
                "phoneVerified",
                "photo",
                "cover",
                "donate",
                "followers",
                "followings",
                "feeds",
                "isActive",
            ])
            .sort({ createdAt: -1 });
    }

    async getLikeUsers(id: any | undefined) {
        return this.userModel
            .find({ _id: { $nin: new mongoose.Types.ObjectId(id) } }, [
                "_id",
                "username",
                "email",
                "emailVerified",
                "firstname",
                "lastname",
                "description",
                "phone",
                "phoneVerified",
                "photo",
                "cover",
                "donate",
                "followers",
                "followings",
                "feeds",
                "isActive",
            ])
            .sort({ feeds: -1 })
            .limit(5);
    }

    async getUser(id: any): Promise<IUser> {
        return this.userModel
            .findOne(
                {
                    _id: id,
                },
                [
                    "_id",
                    "username",
                    "email",
                    "emailVerified",
                    "firstname",
                    "lastname",
                    "description",
                    "phone",
                    "phoneVerified",
                    "photo",
                    "cover",
                    "donate",
                    "website",
                    "story",
                    "followers",
                    "followings",
                    "isActive",
                ],
            )
            .populate(["followers", "followings"])
            .exec()
            .then((r) => {
                return { ...r["_doc"], _id: undefined, id: r["_doc"]._id };
            })
            .catch((e) => {
                throw new BadRequestException(e);
            });
    }

    async getUserProfile(username: string) {
        return this.userModel
            .findOne({ username: username }, [
                "_id",
                "username",
                "email",
                "emailVerified",
                "firstname",
                "lastname",
                "description",
                "phone",
                "phoneVerified",
                "photo",
                "cover",
                "donate",
                "followers",
                "followings",
                "feeds",
                "website",
                "story",
                "isActive",
            ])
            .populate(["followers", "followings"]);
    }

    async updateUser(attr: any): Promise<IUser> {
        return this.userModel.findOneAndUpdate(
            {
                _id: attr._id,
            },
            { ...attr },
            { new: true, projection: Object.keys(attr) },
        );
    }

    async userValidate(attr: any): Promise<IUser> {
        return this.userModel
            .findOne({ ...attr }, ["_id", "username", "email", "emailVerified", "password", "isActive"])
            .exec();
    }

    async create(attr: any): Promise<IUser> {
        return this.userModel.create({ ...attr, password: encryptString(attr.password) }).catch((e) => {
            if (e.code === 11000) {
                throw new BadRequestException(
                    Object.keys(e.keyPattern).map((i) => `${i} was used already. Please choose another one.`),
                );
            } else {
                throw new BadRequestException([e]);
            }
        });
    }

    async followUser(id: string, user: any) {
        const me = await this.userModel.findOne({ _id: user.id });
        const ur = await this.userModel.findOne({ _id: new mongoose.Types.ObjectId(id) });
        if (ur?.followers.toString().includes(me._id.toString())) {
            me.followings = me.followings.filter((i: any) => i.toString() !== ur._id.toString());
            ur.followers = ur.followers.filter((i: any) => i.toString() !== me._id.toString());
        } else {
            me.followings.push(ur);
            ur.followers.push(me);
        }
        me.save();
        return ur.save();
    }
}
