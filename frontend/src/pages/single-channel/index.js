import React, {Fragment, useEffect, useState} from 'react';
import AuthLayout from "../../layouts/auth.layout";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {
    accessRequestGroupApi,
    createGroupFeedApi,
    feedApi,
    getGroupApi,
    getGroupFeedsApi,
    parseLinkApi
} from "../../api";
import SingleChannelRight from "./right";
import MyPostInputWrap from "../mypost/style/input";
import {Avatar, Button, Card, Col, Input, message, Modal, Row, Space, Upload} from "antd";
import {Icon} from "@iconify/react";
import {getOffsetTime} from "../../utils/helper/time.helper";
import ImgCrop from "antd-img-crop";
import config from "../../config";
import MyPosts from "../mypost/posts";
import {useSelector} from "react-redux";

const {TextArea} = Input;
const {Dragger} = Upload;

const SingleChannelPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams()
    const user = useSelector((state) => state.auth)?.user
    const auth = useSelector((state)=>state.auth)
    const [group, setGroup] = useState({})
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
    const [permission, setPermission] = useState(false);
    const [rqst, setRqst] = useState(false);

    const getHandle = async () => {
        try {
            const {data} = await getGroupApi(location.pathname?.split("/")[2]);
            if(data.members?.find((member) => member._id === user.id) || data.author?._id === user.id) {
                setPermission(false);
                setRqst(false)
            } else if(data.requests?.find((member) => member._id === user.id)) {
                setRqst(true);
                setPermission(false)
            } else {
                setPermission(true);
                setRqst(false)
            }

            setGroup(data)

            getGroupFeedsApi(location.pathname?.split("/")[2])
                .then(({data}) => {
                    setFeeds(data)
                })
                .catch(() => {
                })
        } catch (e) {
            setPermission(true)
        }
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
        createGroupFeedApi({
            post,
            image,
            link,
            group: group._id,
            repost: repost?._id,
            meta: {
                title: meta.title,
                description: meta.description,
                image: meta?.image || meta?.["og:image"]
            }
        })
            .then(() => {
                setPost("")
                setImage("")
                getHandle()
                message.success("Successfully created an post!")
            })
            .catch((e) => {
                console.warn(e)
                message.error("An error was created when you do post. please try again later.")
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const requestJoinHandle = async () => {
        try {
            if(!auth.isAuth) {
                navigate("/signup?redirect=" + location.pathname)
            } else {
                await accessRequestGroupApi({slug: location.pathname?.split("/")[2]})
                getHandle()
            }
            
        } catch (e) {
            console.warn(e)
        }
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

    useEffect(()=>{
        getHandle()
    }, [])


    return (
        <AuthLayout
            side={
                <SingleChannelRight group={group} getHandle={getHandle}/>
            }>

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

            <MyPosts group={group._id} feeds={feeds} getHandle={getHandle}/>

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

            <Modal
                title={<h5 style={{textAlign: "center", fontSize: 24, fontWeight: 700}}>Channel Join Request</h5>}
                footer={false}
                closeIcon={<></>}
                centered
                open={permission}>
                <div style={{padding: 12, textAlign: "center", display: "flex", gap: 6, justifyContent: "center"}}>


                    <Button
                        onClick={()=>{requestJoinHandle()}}
                        style={{height: 42, padding: "4px 24px"}}
                        type="primary">
                        Request to Join
                    </Button>
                    {/*<Button*/}
                    {/*    onClick={()=>{navigate("/")}}*/}
                    {/*    style={{height: 42, padding: "4px 24px"}}*/}
                    {/*    type="default"*/}
                    {/*    >*/}
                    {/*    Go Home*/}
                    {/*</Button>*/}
                </div>
            </Modal>

            <Modal
                title={<h5 style={{textAlign: "center", color: "red", fontSize: 24, fontWeight: 700}}>Approval Pending</h5>}
                text="center"
                footer={false}
                closeIcon={<></>}
                centered
                open={rqst}>
                <div style={{padding: 12, textAlign: "center", display: "flex", alignItems: "center", gap: 6, justifyContent: "center", flexDirection: "column"}}>
                    <h3>Your request is pending approval.</h3>
                    <Button
                        onClick={()=>{navigate("/")}}
                        style={{height: 50, padding: "4px 32px", backgroundColor: "#8f3dce", color: "#ffffff"}}
                        type="default">
                        Go Home
                    </Button>
                </div>
            </Modal>
        </AuthLayout>
    );
};

export default SingleChannelPage;