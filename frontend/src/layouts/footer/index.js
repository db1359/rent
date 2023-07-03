import React from 'react';
import {Button, Col, Grid, Layout, Row} from "antd";
import {Link, useLocation} from "react-router-dom";
import Container from "../../style/container";
import {Icon} from '@iconify/react';
import Copyright from "./style/copyright";
import {useSelector} from "react-redux";

const {Footer} = Layout

const {useBreakpoint} = Grid

const LandingLayoutFooter = () => {
    const location = useLocation()

    const auth = useSelector(state => state.auth)

    const breakpoints = useBreakpoint()

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
                            <Col>
                                <Link to="/about">About</Link>
                            </Col>
                            {/* <Col>
                                <Link to="/story">Arianna's Story</Link>
                            </Col> */}
                            <Col>
                                <Link to="/about/share">Your Story</Link>
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
                                    href='https://twitter.com/freearianna'
                                    shape="circle"
                                    type="primary"
                                    color="pink"
                                    size="large"
                                    style={{color: "#ffffff", backgroundColor: "#ce3daf"}}>
                                    <Icon icon="mdi:twitter" style={{width: 32, height: 32}}/>
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
                                <Copyright>Copyright © Glitter 2023</Copyright>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Footer>
    );
};

// Cloudflare Web Analytics
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "fc1cb0477cc64611af70ccdf625284b0"}'></script>
// End Cloudflare Web Analytics

export default LandingLayoutFooter;
