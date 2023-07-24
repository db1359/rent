import React, {Fragment, useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Button, Col, Drawer, Grid, Layout, Menu, Row} from "antd";
import Container from "../../components/paper/container";
import LogoText, {LogoTextLight} from "../../style/logo-text";
import HamburgerButton from "../../components/button/hamburger";
import axios from "axios";
import config from "../../config";
import {MenuOutlined} from "@ant-design/icons";

const {useBreakpoint} = Grid;

const {Header} = Layout;

const LayoutHeader = () => {
    const [visible, setVisible] = useState(false);
    const [scroll, setScroll] = useState(0);
    const [user, setUser] = useState(null);
    const breakpoints = useBreakpoint();
    const navigate = useNavigate();
    const location = useLocation();

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
        <Header style={location.pathname === "/" && scroll < 150
                    ? {position: "absolute", width: "100%",
                        backgroundColor: "transparent"}
                    : {}}>
            <Container>
                <Row justify="space-between" align="middle">
                    <Col>
                        <LogoText>
                            <Link to="/">Glitter</Link>
                        </LogoText>
                    </Col>
                    <Col>
                        {breakpoints.lg ? (
                            <Row gutter={20}>

                                {/* <Col>
                                    {user ? (
                                        <nbsp/>
                                    ) : (
                                        <Button type="headerlink"
                                            onClick={() => {navigate("/story");}}
                                            className={location.pathname === "/story" && "active"}>
                                            Arianna's Story
                                        </Button>
                                    )}
                                </Col> */}

                                <Col>
                                    {user ? (
                                        <nbsp/>
                                    ) : (
                                        <Button type="headerlink"
                                            onClick={() => {navigate("/about");}}
                                            className={location.pathname === "/about" && "active"}>
                                            Defund Family Court
                                        </Button>
                                    )}
                                </Col>

                                <Col>                           
                                    {user ? (
                                        <nbsp/>
                                    ) : (
                                        <Button type="headerlink"
                                            onClick={() => {navigate("/dir");}}
                                            className={location.pathname === "/dir" && "active"}>
                                            Directory
                                        </Button>
                                    )}
                                </Col>

                                <Col>                           
                                    {user ? (
                                        <nbsp/>
                                    ) : (
                                        <Button type="headerlink"
                                                onClick={() => {navigate("/recalls");}}
                                                className={location.pathname === "/recalls" && "active"}>
                                                Recalls
                                        </Button>
                                    )}
                                </Col>

                                <Col>
                                    {user ? (
                                        <nbsp/>
                                    ) : (
                                        <Button type="headerlink"
                                                onClick={() => {navigate("/courtwatch");}}
                                                className={location.pathname === "/courtwatch" && "active"}>
                                                CourtWatch
                                        </Button>
                                    )}
                                </Col>

                                <Col>
                                    {user ? (
                                        <nbsp/>
                                    ) : (
                                        <Button type="donate" style={{marginLeft: 18}}
                                            onClick={() => {navigate("/donate");}}>
                                            DONATE
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
                                    visible={visible}
                                    onClose={() => {setVisible(false);}}
                                    title={
                                        <LogoTextLight
                                            onClick={() => {setVisible(false);}}
                                            style={{color: "#8f3dce!important"}}
                                            >
                                            <Link to="/">Free Arianna</Link>
                                        </LogoTextLight>
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
                                        {/* <NavHashLink to="/arianna">Arianna's Story</NavHashLink> */}
                                        <Menu.Item key="story">Arianna's Story</Menu.Item>
                                        <Menu.Item key="about">Defund Family Court</Menu.Item>
                                        {/* <Menu.Item key="community">Community</Menu.Item> */}
                                        <Menu.Item key="donate" className="btn">DONATE</Menu.Item>
                                        {/* <Menu.Item key="login">Login</Menu.Item> */}
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

