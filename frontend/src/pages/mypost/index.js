import React, {Fragment, useEffect, useState} from 'react';
import AuthLayout from "../../layouts/auth.layout";
import MyPostInputWrap from "./style/input";
import {Avatar, Button, Card, Grid, Col, Input, message, Modal, Row, Space, Upload} from "antd";
import {Icon} from "@iconify/react";
import {createFeedApi, feedApi, feedsApi, likeUsersApi, parseLinkApi} from "../../api";
import ImgCrop from "antd-img-crop";
import config from "../../config";
import MyPosts from "./posts";
import {useNavigate, useLocation, useSearchParams, Link} from "react-router-dom";
import {getOffsetTime} from "../../utils/helper/time.helper";
import AuthRight from "../../layouts/navs/auth-right";

const {TextArea} = Input;

const {Dragger} = Upload;

const MyPostPage = () => {
    const navigate = useNavigate();

    const location = useLocation();

    const [searchParams] = useSearchParams()

    const [post, setPost] = useState("");

    const [repost, setRepost] = useState(null);

    const [image, setImage] = useState("");

    const [imgObj, setImgObj] = useState({});

    const [visible, setVisible] = useState(false);

    const [loading, setLoading] = useState(false);

    const [fileList, setFileList] = useState([]);

    const [link, setLink] = useState("")

    const [meta,setMeta] = useState({});

    const [feeds, setFeeds] = useState([]);

    const [likes, setLikes] = useState([]);

    const [user, setUser] = useState({});

    const {useBreakpoint} = Grid

    const breakpoints = useBreakpoint()

    const getHandle = () => {
        feedsApi()
            .then(({data}) => {
                setFeeds(data)
            })
            .catch((e) => {
                console.log(e)
            })
        likeUsersApi()
            .then(({data}) => {
                setLikes(data);
            })
            .catch((e)=>{
                console.error(e)
            });
    }

    const changeHandle = (e) => {
        setPost(e.target.value)
    }

    const fileChange = (info) => {
        setLoading(true)
        setFileList([info.fileList[info.fileList.length - 1]])
        const {status} = info.file;
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
            setImgObj(info.fileList[0].response)
            setLoading(false)
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
            setLoading(false)
        }
    }

    const okHandle = () => {
        setImage(imgObj.url);
        setVisible(false)
    }

    const postHandle = () => {
        setLoading(true)
        createFeedApi({
            post,
            image,
            link,
            repost: repost?._id,
            meta: {
                title: meta.title,
                description: meta.description,
                image: meta?.image || meta?.["og:image"]
            }
        })
            .then(({data}) => {
                setPost("")
                setImage("")
                getHandle()
                navigate('/')
                message.success("Successfully created an post!")
            })
            .catch((e) => {
                message.error("An error was created when you do post. please try again later.")
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(()=>{
        const regex = new RegExp("https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)");

        if(post.match(regex)) {
            setLink(post.match(regex)[0])
        } else {
            setLink("")
        }
    },[post])

    useEffect(()=>{
        if(!!link) {
            parseLinkApi(link)
                .then(({data})=>{
                    setMeta(data);
                })
                .catch((e)=>{
                    console.log(e)
                })
        } else {
            setMeta({})
        }
    },[link]);

    useEffect(()=>{
        getHandle()
    },[])

    useEffect(()=>{
        if (!!searchParams.get('repost')) {
            feedApi(searchParams.get('repost'))
                .then(({data})=>{
                    setRepost(data)
                })
                .catch((e) =>{
                    console.log(e)
                })
        } else {
            setRepost(null)
        }
    },[searchParams])

    return (
        <AuthLayout side={<AuthRight user={user}/>}>
            <MyPostInputWrap>
                <Space direction="vertical" style={{width: "100%"}} size={14}>
                    {
                    !!image && (
                        <div className="image-form-preview">
                            <button onClick={() => {setImage("")}}>
                                <Icon icon="material-symbols:close"/>
                            </button>
                            <img src={image} alt=""/>
                        </div>
                        )
                    }
                    <TextArea placeholder="Add your message here" onChange={changeHandle} value={post}/>
                    <Row
                        align="middle"
                        justify="center"
                        style={{
                            width: "100%",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                        <Col>
                            <button
                                className="icon-button"
                                onClick={() => {
                                    setVisible(true)
                                }}
                            >
                                <Icon icon="carbon:image"/>
                            </button>
                        </Col>
                        <Col>
                            <Button
                                style={{padding: "0 20px"}}
                                disabled={!post}
                                className="btn-middle"
                                onClick={postHandle}
                                loading={loading}>
                                Post
                            </Button>
                        </Col>
                    </Row>
                    {meta.title && (
                        <Card
                            className="link-preview-card-horizontal"
                            cover={<img alt="example" src={meta?.image || meta?.["og:image"]} />}
                            onClick={()=>{
                                window.open(link, "_blank")
                            }}>
                            <h4>{meta.title}</h4>
                            <p>
                                {meta.description}
                            </p>
                        </Card>
                        )
                    }
                    {repost?._id && (
                        <div className="repost-wrap">
                            <div> 
                                <div className="feed-header">
                                    <div>
                                        <Avatar
                                        size={50}
                                        style={{fontSize: 24, cursor: "pointer"}}
                                        src={repost?.author?.photo}
                                        onClick={() => {
                                            navigate(`/${repost?.author?.username}`)
                                        }}>
                                        {repost?.author?.['firstname']?.[0]}
                                    </Avatar>
                                    
                                    <h4
                                        onClick={() => {
                                            navigate(`/${repost?.author?.username}`)
                                        }}
                                        style={{cursor: "pointer"}}>
                                        {repost?.author?.['firstname']} {repost?.author?.['lastname']}
                                    </h4>
                                    <p>@{repost?.author?.username} - {getOffsetTime(repost?.createdAt)}</p>
                                    </div>
                                </div>
                                {
                                    !!repost?.image && (
                                        <img className="feed-image" src={repost.image} alt=""/>
                                    )
                                }
                                <div
                                    className="feeds-content"
                                    dangerouslySetInnerHTML={{
                                        __html: repost.feed
                                    }} style={{padding: '10px'}} />
                                {
                                    repost?.preview?.title && (
                                        <Card
                                            style={{marginTop: 12}}
                                            className="link-preview-card"
                                            cover={<img alt="example" src={repost?.preview?.image}/>}
                                            onClick={() => {
                                                window.open(repost?.link, "_blank")
                                            }}>
                                            <h4>{repost?.preview?.title}</h4>
                                            <p>
                                                {repost?.preview?.description}
                                            </p>
                                        </Card>
                                    )
                                }
                                </div>
                        </div>
                        )
                    }
                    {/* <Row align="middle" justify="center"
                        style={{width: "100%", justifyContent: "space-between", alignItems: "center"}}>
                        <Col>
                            <button className="icon-button" onClick={() => {setVisible(true)}}>
                                <Icon icon="carbon:image"/>
                            </button>
                        </Col>
                        <Col>
                            <Button style={{padding: "0 20px"}} disabled={!post} className="btn-middle"
                                onClick={postHandle} loading={loading}>
                                Post
                            </Button>
                        </Col>
                    </Row> */}
                </Space>
            </MyPostInputWrap>

            <MyPosts feeds={feeds} getHandle={getHandle}/>

            <Modal
                open={visible}
                centered
                closeIcon={<Icon icon="material-symbols:close"/>}
                onCancel={() => {
                    setVisible(false)
                }}
                onOk={okHandle}>
                <h4 className="upload-form-title">
                    <b>Image Upload</b>
                </h4>
                <ImgCrop rotate aspect={1.75}>
                    <Dragger
                        multiple={false}
                        accept="image/png,image/jpeg,image/gif"
                        listType="picture"
                        action={config.base_url + "/file/upload"}
                        onChange={fileChange}
                        showUploadList={false}
                        fileList={fileList}>
                        {imgObj?.url ? (
                                <img src={imgObj?.url} alt=""/>
                            ) : (
                                <Fragment>
                                    <p className="upload-form-icon">
                                        <Icon icon={loading ?
                                        "line-md:uploading-loop" :
                                        "material-symbols:upload-sharp"}/>
                                    </p>
                                    <p className="upload-form-text">
                                        Click or drag file to this area to upload
                                    </p>
                                    <p className="upload-form-hint">
                                        Only JPG, PNG and GIF files are allowed
                                    </p>
                                </Fragment>
                            )
                        }
                    </Dragger>
                </ImgCrop>
            </Modal>
        </AuthLayout>
    );
};

export default MyPostPage;
