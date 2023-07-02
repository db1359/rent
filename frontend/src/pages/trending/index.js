import React, {useEffect, useState} from 'react';
import Container from "../../style/container";
import {Avatar, Card, Col, Row, Space} from "antd";
import TrendingWrap from "./style/wrap";
import ProfileCard from "./style/profile-card";
import {Icon} from "@iconify/react";
import {likeUsersApi, profileApi, usersApi} from "../../api";
import {useDispatch, useSelector} from "react-redux";
import {updateProfileAction} from "../../redux/actions/auth";
import {useNavigate, Link} from "react-router-dom";
import AuthRight from "../../layouts/navs/auth-right";

const TrendingPage = () => {

    const navigate = useNavigate();

    const auth = useSelector(state => state.auth)

    const dispatch = useDispatch();

    const [users, setUsers] = useState([]);

    const [likes, setLikes] = useState([]);

    const getHandle = () => {
        usersApi()
            .then(({data}) => {
                setUsers(data);
                auth?.isAuth && profileApi()
                    .then(({data})=>{
                        dispatch(updateProfileAction(data))
                    })
                    .catch((e)=>console.log(e))
            })
            .catch((e)=>{
                console.error(e)
            });
        likeUsersApi()
            .then(({data}) => {
                setLikes(data);
            })
            .catch((e)=>{
                console.error(e)
            });
    }

    useEffect(()=>{
        getHandle()
    },[])

    return (
        <TrendingWrap >
            <Container style={{paddingTop: '17px'}}>
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
        </TrendingWrap>
    );
};

export default TrendingPage;
