import React from 'react';
import ProfileCardWrap from "./card-wrap";
import {Avatar, Button} from "antd";
import {Icon} from "@iconify/react";
import BannerImage from "../../../assets/img/banner.jpg"
import {followApi} from "../../../api";
import {useSelector} from "react-redux";
import {useNavigate, Link} from "react-router-dom";

const ProfileCard = (props) => {
    const {user, getHandle} = props;

    const auth = useSelector(state => state.auth)

    const navigate = useNavigate();

    const followHandle = () => {
        followApi(user?.['_id'])
            .then(({data}) => {
                getHandle()
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <ProfileCardWrap
            cover={<img src={user?.cover || BannerImage} alt=""/>}>
            <Avatar
                size={100}
                src={user?.photo}
                onClick={() => {
                    navigate(`/${user?.username}`)
                }}
                style={{cursor: "pointer"}}>
                {user?.firstname?.[0]}
            </Avatar>
            <Link to={`/${user?.username}`}><h3
                // style={{cursor: "pointer"}}
                // onClick={() => {
                //     navigate(`/${user?.username}`)
                // }}
            >
                {user?.firstname} {user.lastname}
            </h3></Link>
            <p className="profile-description">{user?.description?.substring(0, 60) || "No Description yet"}...</p>
            <p className="followings">
                <Icon icon="icon-park-twotone:history-query"/> {user?.feeds} posts
                <Icon icon="icon-park-outline:like"/> {user?.followers?.length} followers
            </p>
            {
                auth.isAuth && (
                    <Button
                        type="primary"
                        className="btn-middle"
                        onClick={followHandle}
                        ghost={user?.followers?.includes(auth?.user?.id)}>
                        {
                        user?.followers?.includes(auth?.user?.id) ? "Unfollow" : "Follow"
                        }
                    </Button>
                )
            }
        </ProfileCardWrap>
    );
};

export default ProfileCard;
