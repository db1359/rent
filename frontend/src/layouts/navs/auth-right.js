import React, {Fragment, useState, useEffect} from 'react';
import AuthRightNavWrap from "./style/right-wrap";
import {Avatar, Button, Card, Grid, Col, message, Row, Space, Upload} from "antd";
import {useDispatch, useSelector} from "react-redux";
import config from "../../config";
import ImgCrop from "antd-img-crop";
import {updateProfileApi} from "../../api";
import {profileApi, usersApi, likeUsersApi, parseLinkApi} from "../../api";
import {updateProfileAction} from "../../redux/actions/auth";
import {Icon} from "@iconify/react";
import {Link, useLocation, useSearchParams, useNavigate} from "react-router-dom";
import CardTitle from "../../components/heading/card";
import styled from "styled-components"

const {Dragger} = Upload;

const AuthRightNav = (props) => {
    const {user} = props

    const auth = useSelector(state => state.auth)

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [imgObj, setImgObj] = useState({});

    const [fileList, setFileList] = useState([]);

    const [likes, setLikes] = useState([]);

    const [link, setLink] = useState("")

    const [users, setUsers] = useState([]);

    const location = useLocation();

    const [searchParams] = useSearchParams()

    const [image, setImage] = useState("");

    const [visible, setVisible] = useState(false);

    const [loading, setLoading] = useState(false);

    const [meta,setMeta] = useState({});

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

    const {useBreakpoint} = Grid

    const breakpoints = useBreakpoint()

    const fileChange = (info) => {
        setFileList([info.fileList[info.fileList.length - 1]])
        const {status} = info.file;
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
            setImgObj(info.fileList[0].response)
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    }

    const updateProfileHandle = () => {
        updateProfileApi({donate: imgObj?.url})
            .then(({data}) => {
                dispatch(updateProfileAction(data))
                message.success("Successfully updated your profile image.")
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const isMe = user?.username === auth?.user?.username

    return (
        <AuthRightNavWrap>
            { isMe ? (
            <Card style={{marginBottom: '55px', textAlign: 'center'}}>
                <h1><b>Donate</b></h1>
                <Fragment>
                    <ImgCrop rotate aspect={1}>
                        <Dragger
                            multiple={false}
                            accept="image/png,image/jpeg,image/gif"
                            listType="picture"
                            action={config.base_url + "/file/upload"}
                            onChange={fileChange}
                            showUploadList={false}
                            fileList={fileList}>
                            {
                                (imgObj?.url || auth?.user?.donate) ? (
                                    <img src={imgObj?.url || auth?.user?.donate} alt=""/>
                                ) : (
                                    <img
                                        src={auth?.user?.donate || 'https://t3.ftcdn.net/jpg/05/37/73/58/360_F_537735846_kufBp10E8L4iV7OLw1Kn3LpeNnOIWbvf.jpg'}
                                        alt=""/>
                                )
                            }
                        </Dragger>
                    </ImgCrop>
                    <Button
                        type="primary"
                        style={{marginTop: 24}}
                        block
                        className="btn-middle"
                        onClick={updateProfileHandle}>
                        Add Donation QR
                    </Button>
                </Fragment>
            </Card>
            ) : (
            user?.donate &&
            <Card style={{marginBottom: '55px', textAlign: 'center'}}>
                <h1><b>Donate</b></h1>
                <img src={user?.donate} alt=""/>
            </Card>
            )
            }
            <ActionFormCard>
                <h1 style={{marginBottom: 11, textAlign: 'center'}}><b>You Might Like</b></h1>
                <div style={{marginBottom: 0}}>
                    {likes.map((i) =>(
                        <div key={i?.['_id']} className="side-user-card" onClick={()=>{navigate(`/${i?.username}`)}}>
                            <Avatar src={i?.photo} size={52} style={{margin: '2px'}}>
                                {i?.firstname?.[0]}
                            </Avatar>
                            <Link className="info-area">
                                <h3>{i?.firstname} {i?.lastname}</h3>
                            </Link>
                        </div>
                    ))
                    }
                </div>
            </ActionFormCard>
            
            <Card style={{background: 'none', border: 0, alignItems: "center", marginTop: '90px'}}>
                <Row justify="center" gutter={0} style={{justifyContent: "center"}}>  
                    <Col>
                        <Button type="leftcolumnlink">
                            Follow
                        </Button>
                    </Col>
                </Row>
                <Row justify="center" gutter={0} style={{justifyContent: "center"}}>  
                    <Col>
                        <Button
                            target='_blank'
                            href='https://twitter.com/mogul'
                            shape="circle"
                            type="primary"
                            color="pink"
                            size="large"
                            style={{color: "#ffffff", backgroundColor: "#8f3dce", marginTop: 10,
                                marginLeft: 0,
                            }}>
                            <Icon icon="mdi:twitter" style={{width: 32, height: 32}}/>
                        </Button>
                    </Col>
                </Row>
            </Card>

            <Card style={{border: 0, background: 'none'}}>
                <Row gutter={20} justify="center" style={{justifyContent: breakpoints.lg ? "flex" : "center", paddingTop: 0}}>
                    <Col>
                        <Link to="/about">About</Link>
                    </Col>
                    {/* <Col>
                        <Link to="/story">Arianna's Story</Link>
                    </Col> */}
                    <Col>
                        <Link to="/channels/abolishfamilycourt">Channels</Link>
                    </Col>
                    <Col>
                        <Link to="/donate">Donate</Link>
                    </Col>
                    <Col>
                        <Link to="/about/privacy">Privacy</Link>
                    </Col>
                    <Col>
                        <Link to="/about/terms">Terms</Link>
                    </Col>
                </Row>
                <Row gutter={20} justify="center" style={{justifyContent: breakpoints.lg ? "flex" : "center", paddingTop: 0}}>
                    <Col>
                        <Link></Link>
                    </Col>    
                    <Col>
                        Copyright © MOGUL 2024
                    </Col>
                </Row>
            </Card> 
        </AuthRightNavWrap>
    );
};

const ActionFormCard = styled(Card)`
  box-shadow: none;
  border: none;
  background: linear-gradient(to top, #f4e1ff, #f4e1ff);
  border-radius: 12px;
  padding: 0px;

  h2 {
    text-align: center;
    //font-size: 28px;
    margin-bottom: 0px;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`

export default AuthRightNav;