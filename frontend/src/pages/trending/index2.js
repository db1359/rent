import React, {useEffect, useState} from 'react';
import {Avatar, Button, Card, Col, Dropdown, Row, Space, Tabs} from "antd";
import {Icon} from "@iconify/react"
import AuthLayout from "../../layouts/auth.layout";
import ProfileTopWrap from "./style/top-wrap";
import ProfileCard from "./style/profile-card";
import {followApi, myFeedsApi, userApi} from "../../api";
import BannerImage from "../../assets/img/banner.jpg"
import {useLocation, useNavigate, Link, useParams} from "react-router-dom";
import AuthRight from "../../layouts/navs/auth-right";
import Container from "../../style/container";
import TrendingWrap from "./style/wrap";
import {likeUsersApi, profileApi, usersApi} from "../../api";
import {useDispatch, useSelector} from "react-redux";
import {updateProfileAction} from "../../redux/actions/auth";

const ProfilePage = () => {
    const auth = useSelector(state => state.auth)

    const routeParams = useParams();

    const navigate = useNavigate();

    const location = useLocation();

    const [edit, setEdit] = useState(false);

    const [main, setMain] = useState(false);

    const [photo, setPhoto] = useState(false);

    const [cover, setCover] = useState(false);

    const [feeds, setFeeds] = useState([]);

    const [user, setUser] = useState({});

    const getHandle = () => {
        userApi(routeParams.username)
            .then(({data}) => {
                setUser(data)
                myFeedsApi(data._id)
                    .then(({data}) => {
                        setFeeds(data)
                    })
                    .catch((e) => {
                        console.log(e)
                    })
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const followHandle = () => {
        followApi(user?.['_id'])
            .then(({data}) => {
                getHandle()
            })
            .catch((e) => {
                console.log(e)
            })
    }

    useEffect(() => {
        getHandle()
    }, [routeParams])

    useEffect(()=>{
        if(!auth?.isAuth) {
            navigate(`/login/?redirect=${location?.pathname}`)
        }
    },[auth])

    const isMe = user?.username === auth?.user?.username

    const following = user?.['followers']?.filter((i)=>i.id!==auth?.user?.id).length > 0

    console.log(user)

    return user.username ? (
        <AuthLayout side={<AuthRight user={user}/>}>
            <Container style={{paddingTop: '20px'}}>
                <Row gutter={[32, 32]}>
                    <Col span={18}>
                        <Row gutter={[24, 24]}>
                            {
                                users.map((user, key) => (
                                    <Col span={8} key={`profile=${key}`}>
                                        <ProfileCard
                                            user={user}
                                            getHandle={getHandle}
                                        />
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                    <Col span={6} style={{marginTop: '-12px', paddingLeft: '20px', paddingRight: '20px'}}>
                        <Space
                            direction="vertical"
                            size={32}
                            style={{width: "100%"}}
                        >
                            {/* {
                                auth?.isAuth && (
                                    <Card
                                        title="My Network Status"
                                        className="my-network-status"
                                    >
                                        <div className="right-menu">
                                            <div className="right-menu-item">
                                                <Icon icon="mdi:cards-heart"/>
                                                {auth?.user?.followers?.length || 0} users are following you
                                            </div>
                                        </div>
                                    </Card>
                                )
                            } */}
                            <Card
                                title="You might like"
                                className="my-network-status"
                            >
                                <Space
                                    direction="vertical"
                                    size={12}
                                    style={{width: "100%"}}
                                >
                                    {
                                        likes.map((i) =>(
                                            <div key={i?.['_id']} className="side-user-card" onClick={()=>{navigate(`/${i?.username}`)}}>
                                                <Avatar
                                                    src={i?.photo}
                                                    size={52}
                                                >
                                                    {i?.firstname?.[0]}
                                                </Avatar>
                                                <Link className="info-area">
                                                    <h3>{i?.firstname} {i?.lastname}</h3>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </Space>
                            </Card>
                        </Space>
                    </Col>
                </Row>
            </Container>
        </AuthLayout>
    ): 
};

export default ProfilePage;