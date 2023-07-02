import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import AuthLayout from "../../layouts/auth.layout";
import {Avatar, Button, Card, Col, Dropdown, Row, Space, Tabs} from "antd";
import BannerImage from "../../assets/img/banner.jpg";
import {Icon} from "@iconify/react";
import ProfileTopWrap from "../myprofile/style/top-wrap";
import {directoryApi, followDirectoryApi} from "../../api";
import DirCoverEdit from "./components/cover";
import DirPhotoEdit from "./components/photo";
import DirMainEdit from "./components/main";
import DirectoryStory from "./components/story";
import AuthRight from "../../layouts/navs/auth-right";

const DirectorySinglePage = () => {
    const auth = useSelector(state => state.auth)
    const routeParams = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [edit, setEdit] = useState(false);
    const [main, setMain] = useState(false);
    const [photo, setPhoto] = useState(false);
    const [cover, setCover] = useState(false);
    const [dir, setDir] = useState({});

    const getHandle = (slug) => {
        directoryApi(slug)
            .then(({data}) => {
                setDir(data)
            })
            .catch((e) => console.log(e))
    }

    const followHandle = () => {
        followDirectoryApi({id: dir._id})
            .then(({data}) => {
                getHandle(routeParams.slug);
            })
            .catch((e)=>console.log(e))
    }

    useEffect(() => {
        if (routeParams.username) {
            getHandle(routeParams.username)
        }
    }, [routeParams])

    const isMine = auth?.user?.id === dir?.author?._id
    
    const following = dir?.['followers']?.filter((i)=>i.id!==auth?.user?.id).length > 0

    return (
        <AuthLayout side={<AuthRight user={user}/>}>
            <ProfileTopWrap>
                <Card
                    cover={
                        <div>
                            <img
                                src={dir?.cover || BannerImage}
                                alt=""
                                width="100%"
                                height="200"
                            />
                            {edit && (
                                <Button className="header-image-edit"
                                        onClick={() => {
                                            setCover(true)
                                        }}>
                                    <Icon icon="material-symbols:edit"/>
                                </Button>
                            )}
                        </div>
                    }>

                    <Row style={{justifyContent: "space-between"}}>
                        <Col>
                            <div>
                                <Avatar size={160} src={dir?.photo}>
                                    {dir?.['name']?.[0]}
                                </Avatar>
                                {edit && (
                                    <Button
                                        className="header-image-edit"
                                        onClick={() => {
                                            setPhoto(true)
                                        }}>
                                        <Icon icon="material-symbols:edit"/>
                                    </Button>
                                )}
                            </div>
                        </Col>
                        <Col>
                            <Space size={12}>
                                {
                                    isMine && (
                                        <Button
                                            shape="circle"
                                            className="btn-middle"
                                            onClick={() => {
                                                setEdit(!edit)
                                            }}>
                                            <Icon icon={edit ? "ri:user-shared-line" : "material-symbols:edit"}/>
                                        </Button>
                                    )
                                }
                                <Button
                                    style={{borderRadius: 30, padding: "0 24px"}}
                                    className="btn-middle"
                                    type={!following ? "primary" : "default"}
                                    onClick={followHandle}>
                                    {
                                        following ? "Following" : "Follow"
                                    }
                                </Button>
                            </Space>
                        </Col>
                    </Row>
                    <h2 className={edit ? "profile-title editing" : "profile-title"}
                        onClick={() => {
                            edit && setMain(true)
                        }}>
                        {dir?.['name']}{" "}
                        {edit && <Icon icon="material-symbols:edit"/>}
                    </h2>
                    <p className={edit ? "profile-username editing" : "profile-username"}
                        onClick={() => {
                            edit && setMain(true)
                        }}>
                        @{dir?.slug} {edit && <Icon icon="material-symbols:edit"/>} 
                    </p>
                    <p className={edit ? "profile-description editing" : "profile-description"}
                        onClick={() => {
                            edit && setMain(true)
                        }}>
                        {dir?.description ||
                            <span style={{color: "#aaaaaa"}}>No description yet!</span>} {edit &&
                        <Icon icon="material-symbols:edit"/>}
                    </p>
                    <p>
                        <b>{dir?.['followings']?.length}</b>&nbsp;&nbsp;
                        <Dropdown
                            menu={{
                                onClick: (e) => {
                                    navigate(`/${e.key}`)},
                                items: [
                                    ...dir?.followings?.map((i) => {
                                        i.key = i?.username;
                                        i.icon = (<Avatar src={i?.photo}>{i.firstname?.[0]}</Avatar>)
                                        i.label = i.firstname + " " + i.lastname
                                        return i
                                    }) || []
                                ]
                            }}>
                            <span>followings</span>
                        </Dropdown>
                        &nbsp;&nbsp;&nbsp;
                        <b>{dir?.['followers']?.length}</b>&nbsp;&nbsp;
                        <Dropdown
                            menu={{
                                onClick: (e) => {
                                    navigate(`/${e.key}`)},
                                items: [
                                    ...dir?.followers?.map((i) => {
                                        i.key = i?.username;
                                        i.icon = (<Avatar src={i?.photo}>{i.firstname?.[0]}</Avatar>)
                                        i.label = i.firstname + " " + i.lastname
                                        return i
                                    }) || []
                                ]
                            }}>
                            <span>followers</span>
                        </Dropdown>
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
                            <></>
                        ),
                    },
                    {
                        label: `Story`,
                        key: 'case-details',
                        children: <DirectoryStory dir={dir} getHandle={getHandle}/>,
                    },
                ]}/>

            <DirCoverEdit
                open={cover}
                setOpen={setCover}
                getHandle={getHandle}
                dir={dir}/>

            <DirPhotoEdit
                open={photo}
                setOpen={setPhoto}
                getHandle={getHandle}
                dir={dir}/>

            <DirMainEdit
                open={main}
                setOpen={setMain}
                getHandle={getHandle}
                dir={dir}/>
        </AuthLayout>
    );
};

export default DirectorySinglePage;
