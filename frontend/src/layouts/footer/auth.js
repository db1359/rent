import React from 'react';
import Container from "../../style/container";
import {Button, Avatar, Col, Grid, Dropdown, Layout, Row, Space} from "antd";
import LogoText from "../../style/logo-text";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {logoutAction} from "../../redux/actions/auth";
import {useDispatch, useSelector} from "react-redux";
import {Icon} from "@iconify/react";
import Copyright from "./style/copyright";

const { Footer } = Layout

const AuthFooter = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const {useBreakpoint} = Grid
    const breakpoints = useBreakpoint()

    // const menuChangeHandle = (e) => {
    //     if(e.key === 'logout') {
    //         dispatch(logoutAction())
    //         navigate('/login')
    //     } else if(e.key==='myprofile') {
    //         navigate(`/${auth?.user?.username}`)
    //     }else {
    //         navigate(`/${e.key}`)
    //     }
    // }

    // const items = [
    //     {
    //         key: 'myprofile',
    //         icon: <Icon style={{fontSize: 18}} icon="mdi:user-outline"/>,
    //         label: <span style={{fontSize: 14, fontWeight: 600}}>My Profile</span>
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

    return (
        <Footer className={(location.pathname === "/" && !auth.isAuth) ? "fixed-footer" : ""}>
            <Container>
                <Row align='middle' justify='space-between' gutter={[20, 12]}>
                    <Col lg={{span: 11}} span={24}>
                        <Row gutter={20} justify="center"
                            style={{justifyContent: breakpoints.lg ? "flex-start" : "center"}}>
                            <Col>
                                <Link to="/">Home</Link>
                            </Col>
                            {/* <Col>
                                <Link to="/about">About</Link>
                            </Col> */}
                            {/* <Col>
                                <Link to="/story">Arianna's Story</Link>
                            </Col> */}
                            <Col>
                                <Link to="/channels/abolishfamilycourt">Causes</Link>
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
                    </Col>
                    <Col lg={{span: 2}} span={24}>
                        <Row justify='center'>
                            <Col>
                                <Button
                                    target='_blank'
                                    href='https://twitter.com/iboycott'
                                    shape="circle"
                                    type="primary"
                                    color="pink"
                                    size="large"
                                    style={{color: "transparent", backgroundColor: "transparent"}}>
                                    <Icon icon="mdi:twitter" style={{width: 28, height: 28}}/>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={{span: 11}} span={24}>
                        <Row
                            justify="flex-end"
                            gutter={20}
                            style={{justifyContent: "flex-end"}}>
                            <Col>
                                <Copyright>Copyright © iBoycott 2024</Copyright>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Footer>
    );
};

// Cloudflare Web Analytics
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "713708b4f8484a3ca1b88a245dc9cea9"}'></script>
// End Cloudflare Web Analytics

export default AuthFooter;
