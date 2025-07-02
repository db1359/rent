import React, {Fragment, useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Avatar, Space, Button, Col, Drawer, Grid, Dropdown, Layout, Menu, Row} from "antd";
import Container from "../../components/paper/container";
import LogoText, {LogoTextLight} from "../../style/logo-text";
import HamburgerButton from "../../components/button/hamburger";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import config from "../../config";
import {Icon} from "@iconify/react";
import {MenuOutlined} from "@ant-design/icons";
import Logo from "../../assets/img/renter_logo_120_arialblack.png";

const {useBreakpoint} = Grid;

const {Header} = Layout;

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
            key: '${auth?.user?.username}/settings',
            icon: <Icon style={{fontSize: 16}} icon="mdi:settings-outline"/>,
            label: <span style={{fontSize: 14, fontWeight: 600}}>Settings</span>
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

    // const items2 = [
            // {
            //         key: 'myprofile',
            //         icon: <Icon style={{fontSize: 18}} icon="mdi:user-outline"/>,
            //         label: <span style={{fontSize: 14, fontWeight: 600}}>My Profile</span>
            //     },
            //     {
            //         type: 'divider',
            //     },
            //     {
            //         key: '${auth?.user?.username}/settings',
            //         icon: <Icon style={{fontSize: 16}} icon="mdi:settings-outline"/>,
            //         label: <span style={{fontSize: 14, fontWeight: 600}}>Settings</span>
            //     },
            //     {
            //         type: 'divider',
            //     },
            //     {
            //         key: 'logout',
            //         icon: <Icon style={{fontSize: 16}} icon="icon-park-outline:logout"/>,
            //         label: <span style={{fontSize: 14, fontWeight: 600}}>Logout</span>
            //     }
        // ]

const menuChangeHandle = (e) => {
        if(e.key === 'logout') {
            dispatch(logoutAction())
            navigate('/signin')
        } else if(e.key==='myprofile') {
            navigate(`/${auth?.user?.username}`)
        } else if(e.key==='landlord/dashboard') {
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

    const LayoutHeader = () => {
    const [visible, setVisible] = useState(false);
    const [scroll, setScroll] = useState(0);
    const [user, setUser] = useState(null);
    const breakpoints = useBreakpoint();
    const navigate = useNavigate();
    const location = useLocation();
    const auth = useSelector(state => state.auth)
    
    const navigateHandler = data => {
        console.log(data.key);
        setVisible(false);
        if (data.key !== "#arianna") {
            navigate(data.key);
        }
    };

    useEffect(() => {
        const id = window.localStorage.getItem("@ari_id");
        if (id) {
            axios
                .get(`${config.base_url}/${id}`)
                .then(resp => {
                    setUser(resp.data.user);
                })
                .catch(error => {
                    console.error(error);
                });
        }

        window.addEventListener("scroll", () => {
            setScroll(window.scrollY);
        });

        if (location.hash !== "#arianna") {
            window.scrollTo(0, 0);
        }

        return window.removeEventListener("scroll", () => {
        });
    }, [location]);

    return (
        <Header className="auth-header">
            <Container>
                <Row justify="space-between" align="middle">
                    <Col>
                        <Link to="/"><img src={Logo} style={{height: '40px', marginTop: '0px', marginBottom: 7}} alt="MOGUL"/></Link>
                    </Col>
                    <Col>
                        {breakpoints.lg ? (
                            <Row gutter={20} style={{marginTop: '7px'}}>

                                <Col>
                                    {user ? (
                                        <nbsp/>
                                    ) : (
                                        <Button type="headerdashboardlink"
                                            onClick={() => {navigate("/tenants");}}
                                            className={location.pathname === "/tenants" && "active"}>
                                            Tenants
                                        </Button>
                                    )}
                                </Col>

                                <Col>
                                    {user ? (
                                        <nbsp/>
                                    ) : (
                                        <Button type="headerdashboardlink"
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
                                        <Button type="headerdashboardlink"
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
                                        <Button type="headerdashboardlink"
                                        onClick={() => {navigate("/signin");}}
                                        className={location.pathname === "/signin" && "active"}>
                                        Sign In
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
                                            style={{color: "#9701fc!important", marginLeft: -7}}
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
                                        <Menu.Item key="signin">Sign In</Menu.Item>
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

export default LayoutHeader;