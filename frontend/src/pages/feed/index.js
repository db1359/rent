import React, {useEffect, useState} from 'react';
import AuthLayout from "../../layouts/auth.layout";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import FeedCardWrap from "../../components/card/feed/style/wrap";
import FeedCard from "../../components/card/feed";
import {feedApi} from "../../api";
import {Avatar, Timeline} from "antd";
import {useSelector} from "react-redux";

const FeedPage = () => {

    const [feed, setFeed] = useState({});

    const routeParams = useParams();

    const navigate = useNavigate();

    const location = useLocation();

    const auth = useSelector(state => state.auth)

    const getHandle = () => {
        feedApi(routeParams.id)
            .then(({data})=>{
                setFeed(data)
            })
            .catch((e)=>{
                console.log(e)
            })
    }

    useEffect(() => {
        getHandle()
    }, [routeParams])

    useEffect(()=>{
        if(!auth?.isAuth) {
            navigate(`/login/?redirect=${location.pathname}`)
        }
    },[auth])

    return (
        <AuthLayout>
            <FeedCardWrap>
                <FeedCard feed={feed} getHandle={getHandle}/>
                <Timeline
                    style={{padding: '20px 10px'}}>
                    {
                        feed?.cmts?.map((comment) => (
                            <Timeline.Item
                                key={comment["_id"]}
                                dot={
                                    <Avatar
                                        src={comment?.author?.["photo"]}
                                        style={{
                                            backgroundColor: "#ce3daf",
                                            fontSize: 12
                                        }}
                                        size={32}>
                                        {comment?.author?.["firstname"]?.[0]}
                                    </Avatar>
                                }
                                style={{paddingBottom: 34}}>
                                {comment.comment}
                            </Timeline.Item>
                        ))
                    }
                </Timeline>
            </FeedCardWrap>
        </AuthLayout>
    );
};

export default FeedPage;
