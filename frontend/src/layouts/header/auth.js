import React from 'react';
import Container from "../../style/container";
import {Button, Avatar, Col, Dropdown, Layout, Row, Space} from "antd";
import LogoText from "../../style/logo-text";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {logoutAction} from "../../redux/actions/auth";
import {useDispatch, useSelector} from "react-redux";
import {Icon} from "@iconify/react";
import Logo from "../../assets/img/fontbolt_9701fc.png";

const { Header } = Layout

const AuthHeader = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    const menuChangeHandle = (e) => {
        if(e.key === 'logout') {
            dispatch(logoutAction())
            navigate('/login')
        } else if(e.key==='myprofile') {
            navigate(`/${auth?.user?.username}`)
        } else if(e.key==='channels/abolishfamilycourt') {
            navigate(`/channels/abolishfamilycourt`)
        } else if(e.key==='/courtwatch') {
            navigate(`/courtwatch`)    
        } else if(e.key==='channels/start') {
            navigate(`channels/start`)  
        } else if(e.key==='about/legalabusesyndrome') {
            navigate(`about/legalabusesyndrome`)           
        }else {
            navigate(`/${e.key}`)
        }
    }

    const items = [
        {
            key: 'myprofile',
            icon: <Icon style={{fontSize: 18}} icon="mdi:user-outline"/>,
            label: <span style={{fontSize: 14, fontWeight: 600}}>My Profile</span>
        },
        {
            type: 'divider',
        },
        // {
        //     key: '${auth?.user?.username}/settings',
        //     label: <span style={{fontSize: 14, fontWeight: 600}}>Settings</span>
        // },
        // {
        //     type: 'divider',
        // },
        {
            key: 'logout',
            icon: <Icon style={{fontSize: 16}} icon="icon-park-outline:logout"/>,
            label: <span style={{fontSize: 14, fontWeight: 600}}>Logout</span>
        }
    ]

    const items2 = [
        {
            key: 'channels/courtwatch',
            label: <span style={{fontSize: 14, fontWeight: 600}}>CourtWatch</span>
        },
        {
            type: 'divider',
        },
        {
            key: 'channels/abolishfamilycourt',
            label: <span style={{fontSize: 14, fontWeight: 600}}>Family Court</span>
        },
        {
            type: 'divider',
        },
        {
            key: 'channels/legalabusesyndrome',
            label: <span style={{fontSize: 14, fontWeight: 600}}>Legal Abuse</span>
        },
        {
            type: 'divider',
        },
        {
            key: 'channel',
            label: <span style={{fontSize: 14, fontWeight: 600}}>More Channels</span>
        }
    ]

    return (
        <Header className="auth-header">
            <Container>
                <Row
                    justify="space-between"
                    align="middle"
                    style={{height: "100%", marginTop: '0px'}}>
                    <Col>
                        {/* <LogoText>
                            <Link to="/">CourtWatch</Link>
                        </LogoText> */}
                        <Link to="/"><img src={Logo} style={{height: '30px', marginTop: '0px'}} alt="Boycott"/></Link>
                    </Col>
                    <Col>
                        <Space size={36}>
                            <Button type="communitylink"
                                    onClick={() => {navigate("/");}}
                                    className={location.pathname === "/" && "active"}>
                                    Home
                            </Button>
                            <Dropdown
                                placement="bottomRight"
                                menu={{
                                    items: items2,
                                    onClick: menuChangeHandle,
                                }}>
                                <Button
                                    size="large"
                                    style={{
                                        border: "none",
                                        cursor: "pointer",
                                        
                                    }}
                                    src={auth?.user?.photo}>
                                    Channels
                                </Button>
                            </Dropdown>
                            <Button type="communitylink"
                                    onClick={() => {navigate("/dir");}}
                                    className={location.pathname === "/dir" && "active"}>
                                    Directory test
                            </Button>
                            {/* <Button type="communitylink"
                                    onClick={() => {navigate("/trending");}}
                                    className={location.pathname === "/trending" && "active"}>
                                    Trending
                            </Button> */}
                            <Link to="/"></Link>
                        </Space>
                        <Space size={36}>
                            <Dropdown
                                placement="bottomRight"
                                menu={{
                                    items: items,
                                    onClick: menuChangeHandle,
                                }}>
                                <Avatar
                                    size="large"
                                    style={{
                                        fontSize: 20,
                                        cursor: "pointer",
                                        background: "#9701fc"
                                    }}
                                    src={auth?.user?.photo}>
                                    {auth?.user?.firstname?.[0]}
                                </Avatar>
                            </Dropdown>
                        </Space>
                    </Col>
                </Row>
            </Container>
        </Header>
    );
};

export default AuthHeader;
