import React from 'react';
import Container from "../../style/container";
import {Button, Avatar, Col, Dropdown, Layout, Row, Space} from "antd";
import LogoText from "../../style/logo-text";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {logoutAction} from "../../redux/actions/auth";
import {useDispatch, useSelector} from "react-redux";
import {Icon} from "@iconify/react";
import Logo from "../../assets/img/fontbolt.png";

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
        // {
        //     key: 'channels/courtwatch',
        //     label: <span style={{fontSize: 14, fontWeight: 600}}>CourtWatch</span>
        // },
        // {
        //     type: 'divider',
        // },
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
        <Header style={location.pathname === "/" && scroll < 150
                    ? {position: "absolute", width: "100%", height: "100%",
                        backgroundColor: "transparent"}
                    : {}}>
            <Container>
                <Row justify="space-between" align="middle">
                    <Col>
                        {/* <LogoText>
                            <Link to="/">MOGUL</Link>
                        </LogoText> */}
                        <Link to="/"><img src={Logo} style={{height: '40px', marginTop: '0px'}} alt="Boycott"/></Link>
                    </Col>
                    <Col>
                        {breakpoints.lg ? (
                            <Row gutter={20} style={{marginTop: '7px'}}>

                                <Col>
                                    {user ? (
                                        <nbsp/>
                                    ) : (
                                        <Button type="headerlink"
                                            onClick={() => {navigate("/tenants");}}
                                            className={location.pathname === "/tenants" && "active"}>
                                            Tenants
                                        </Button>
                                    )}
                                </Col>

                                {/* <Col>
                                    {user ? (
                                        <nbsp/>
                                    ) : (
                                        <Button type="headerlink"
                                            onClick={() => {navigate("/tenants/evictions");}}
                                            className={location.pathname === "/tenants/evictions" && "active"}>
                                            Evictions
                                        </Button>
                                    )}
                                </Col> */}

                                <Col>
                                    {user ? (
                                        <nbsp/>
                                    ) : (
                                        <Button type="headerlink"
                                            onClick={() => {navigate("/rentals");}}
                                            className={location.pathname === "/rentals" && "active"}>
                                            Rentals
                                        </Button>
                                    )}
                                </Col>

                                <Col>                           
                                    {user ? (
                                        <nbsp/>
                                    ) : (
                                        <Button type="headerlink"
                                            onClick={() => {navigate("/landlords");}}
                                            className={location.pathname === "/landlords" && "active"}>
                                            Landlords
                                        </Button>
                                    )}
                                </Col>

                                <Col>
                                    {user ? (
                                        <nbsp/>
                                    ) : (
                                        <Button type="donate" style={{marginLeft: 18}}
                                            onClick={() => {navigate("/signup");}}>
                                            SIGN UP
                                        </Button>
                                    )}
                                </Col>

                                <Col>
                                    {user ? (
                                        <nbsp/>
                                    ) : (
                                        <Button type="headerlink"
                                        onClick={() => {navigate("/login");}}
                                        className={location.pathname === "/login" && "active"}>
                                        Login
                                    </Button>
                                    )}
                                </Col>
                            </Row>
                        ) : (
                            <Fragment>
                                <HamburgerButton
                                    type="primary"
                                    size="large"
                                    onClick={() => {setVisible(true);}}>
                                    <MenuOutlined/>
                                </HamburgerButton>
                                <Drawer
                                    placement="right"
                                    visible={visible}
                                    onClose={() => {setVisible(false);}}
                                    title={
                                        <LogoTextLight
                                            onClick={() => {setVisible(false);}}
                                            style={{color: "#9701fc!important"}}
                                            >
                                            <Link to="/">MOGUL</Link>
                                        </LogoTextLight>
                                        // <Link to="/"><img src={Logo2} style={{height: '30px', marginTop: '9px'}} alt="MOGUL"/></Link>
                                    }
                                    closeIcon={<></>}
                                    >
                                    <Menu
                                        onClick={navigateHandler}
                                        selectedKeys={[
                                            ...location.pathname.split("/"),
                                            ...location.hash.split(" "),
                                        ]}
                                        >
                                        {/* <NavHashLink to="/tenants">Tenants</NavHashLink> */}
                                        <Menu.Item key="signup">
                                            <Button type="donate" style={{marginLeft: -3}}
                                                onClick={() => {navigate("/signup");}}>
                                                SIGN UP
                                            </Button>
                                        </Menu.Item>
                                        <Menu.Item key="tenants">Tenants</Menu.Item>
                                        <Menu.Item key="rentals">Rentals</Menu.Item>
                                        <Menu.Item key="landlords">Landlords</Menu.Item>
                                        {/* <Menu.Item key="donate" className="btn">DONATE</Menu.Item> */}
                                        <Menu.Item key="login">Login</Menu.Item>
                                    </Menu>
                                </Drawer>
                            </Fragment>
                        )}
                    </Col>
                </Row>
            </Container>
        </Header>
    );
};

export default AuthHeader;
