import React, {useEffect, useState} from 'react';
import {Avatar, Button, Card, Col, Dropdown, Row, Space, Tabs} from "antd";
import {Icon} from "@iconify/react"
import AuthLayout from "../../layouts/auth.layout";
import ProfileTopWrap from "./style/top-wrap";
import MyPosts from "../mypost/posts";
import {useSelector} from "react-redux";
import MainEdit from "./components/main";
import ProfilePhotoEdit from "./components/photo";
import ProfileCoverEdit from "./components/cover";
import {followApi, myFeedsApi, userApi} from "../../api";
import BannerImage from "../../assets/img/banner.jpg"
import CaseDetails from "./components/case-details";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import AuthRight from "../../layouts/navs/auth-right";
import DirectorySinglePage from "../dir/single";

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
            <ProfileTopWrap>
                <Card
                    cover={
                        <div>
                            <img
                                src={user?.cover || BannerImage}
                                alt=""
                                width="100%"
                                height="200"
                            />
                            {edit && (
                                <Button className="header-image-edit"
                                        onClick={() => {
                                            setCover(true)
                                        }}
                                >
                                    <Icon icon="material-symbols:edit"/>
                                </Button>
                            )} 
                        </div>
                    }
                >
                    <Row
                        style={{justifyContent: "space-between"}}
                    >
                        <Col>
                            <div>
                                <Avatar
                                    size={160}
                                    src={user?.photo}
                                >
                                    {user?.['firstname']?.[0]}
                                </Avatar>
                                {edit && (
                                    <Button
                                        className="header-image-edit"
                                        onClick={() => {
                                            setPhoto(true)
                                        }}
                                    >
                                        <Icon icon="material-symbols:edit"/>
                                    </Button>
                                )}
                            </div>
                        </Col>
                        <Col>
                            <Space size={12}>
                                {
                                    isMe && (
                                        <Button
                                            shape="circle"
                                            className="btn-middle"
                                            onClick={() => {
                                                setEdit(!edit)
                                            }}
                                        >
                                            <Icon icon={edit ? "ri:user-shared-line" : "material-symbols:edit"}/>
                                        </Button>
                                    )
                                }

                                {
                                    !isMe && (
                                        <Button
                                            style={{borderRadius: 30, padding: "0 24px"}}
                                            className="btn-middle"
                                            type={!following ? "primary":"default"}
                                            onClick={followHandle}>
                                            {
                                                following ? "Following" : "Follow"
                                            }
                                        </Button>
                                    )
                                }
                            </Space>
                        </Col>
                    </Row>
                    <h2
                        className={edit ? "profile-title editing" : "profile-title"}
                        onClick={() => {
                            edit && setMain(true)
                        }}
                    >
                        {user?.['firstname']} {user?.['lastname']}{" "}
                        {edit && <Icon icon="material-symbols:edit"/>}
                    </h2>
                    <p
                        className={edit ? "profile-username editing" : "profile-username"}
                        onClick={() => {
                            edit && setMain(true)
                        }}
                    >
                        @{user?.username} {edit && <Icon icon="material-symbols:edit"/>}
                    </p>
                    <p
                        className={edit ? "profile-description editing" : "profile-description"}
                        onClick={() => {
                            edit && setMain(true)
                        }}
                    >
                        {user?.description ||
                            <span style={{color: "#aaaaaa"}}>No description yet!</span>} {edit &&
                        <Icon icon="material-symbols:edit"/>}
                    </p>
                    <p>
                        <b>{user?.['followings']?.length}</b>&nbsp;&nbsp;
                        <Dropdown
                            menu={{
                                onClick: (e) => {
                                    navigate(`/${e.key}`)},
                                items: [
                                    ...user?.followings?.map((i)=>{
                                        i.key=i.username;
                                        i.icon = (<Avatar src={i?.photo}>{i.firstname?.[0]}</Avatar>)
                                        i.label = i.firstname + " " + i.lastname
                                        return i
                                    })||[]
                                ]
                            }}>
                            <span>followings</span>
                        </Dropdown>
                        &nbsp;&nbsp;&nbsp;
                        <b>{user?.['followers']?.length}</b>&nbsp;&nbsp;
                        <Dropdown
                            menu={{
                                onClick: (e) => {
                                    navigate(`/${e.key}`)},
                                items: [
                                    ...user?.followers?.map((i)=>{
                                        i.key=i.username;
                                        i.icon = (<Avatar src={i?.photo}>{i.firstname?.[0]}</Avatar>)
                                        i.label = i.firstname + " " + i.lastname
                                        return i
                                    })||[]
                                ]
                            }}>
                            <span>followers</span>
                        </Dropdown>
                    </p>
                    <p onClick={() => {edit && setMain(true)}}>
                        <a href={user?.website} target="_blank">{user?.website}</a> {edit && <Icon icon="material-symbols:edit"/>}
                    </p>
                </Card>
            </ProfileTopWrap>

            <Tabs
                defaultActiveKey="activity"
                type="card"
                style={{marginTop: 24}}
                items={[
                    {
                        label: `Activity`,
                        key: 'activity',
                        children: (
                            <MyPosts
                                feeds={feeds}
                                getHandle={getHandle}
                            />
                        ),
                    },
                    {
                        label: `Story`,
                        key: 'case-details',
                        children: <CaseDetails user={user} getHandle={getHandle}/>,
                    },
                ]}
            />

            <MainEdit visible={main} setVisible={setMain}/>

            <ProfilePhotoEdit visible={photo} setVisible={setPhoto}/>

            <ProfileCoverEdit visible={cover} setVisible={setCover}/>
        </AuthLayout>
    ) : (
        <DirectorySinglePage/>
    );
};

export default ProfilePage;
