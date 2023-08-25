import React from 'react';
import Container from "../../style/container";
import {Button, Avatar, Col, Dropdown, Layout, Row, Space} from "antd";
import LogoText from "../../style/logo-text";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {logoutAction} from "../../redux/actions/auth";
import {useDispatch, useSelector} from "react-redux";
import {Icon} from "@iconify/react";
import Logo from "../../assets/img/glitter0.png";

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
        {
            key: 'logout',
            icon: <Icon style={{fontSize: 16}} icon="icon-park-outline:logout"/>,
            label: <span style={{fontSize: 14, fontWeight: 600}}>Logout</span>
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
                            <Link to="/">Glitter</Link>
                        </LogoText> */}
                        <Link to="/"><img src={Logo} style={{height: '40px', marginTop: '10px'}} alt="Glitter"/></Link>
                    </Col>
                    <Col>
                        <Space size={36}>
                            <Button type="communitylink"
                                    onClick={() => {navigate("/");}}
                                    className={location.pathname === "/" && "active"}>
                                    Home
                            </Button>
                            <Button type="communitylink"
                                    onClick={() => {navigate("/dir");}}
                                    className={location.pathname === "/dir" && "active"}>
                                    Directory
                            </Button>
                            <Button type="communitylink"
                                    onClick={() => {navigate("/recalls");}}
                                    className={location.pathname === "/recalls" && "active"}>
                                    Recalls
                            </Button>
                            <Button type="communitylink"
                                    onClick={() => {navigate("/courtwatch");}}
                                    className={location.pathname === "/courtwatch" && "active"}>
                                    CourtWatch
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
                                        background: "#8f3dce"
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
