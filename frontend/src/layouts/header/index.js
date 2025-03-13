import React, {Fragment, useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Button, Col, Drawer, Grid, Dropdown, Layout, Menu, Row} from "antd";
import Container from "../../components/paper/container";
import LogoText, {LogoTextLight} from "../../style/logo-text";
import HamburgerButton from "../../components/button/hamburger";
import axios from "axios";
import config from "../../config";
import {MenuOutlined} from "@ant-design/icons";
// import Logo from "../../assets/img/fontbolt_transparent.png";
import Logo from "../../assets/img/ednlogo.png";
import Logo2 from "../../assets/img/ednlogo.png";
// import Logo2 from "../../assets/img/fontbolt_9701_F_C.png";

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
                    ? {position: "absolute", width: "100%", height: "100%",
                        backgroundColor: "transparent"}
                    : {}}>
            <Container>
                <Row justify="space-between" align="middle">
                    <Col>
                        {/* <LogoText>
                            <Link to="/">EDN</Link>
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
                                            onClick={() => {navigate("/evictions");}}
                                            className={location.pathname === "/evictions" && "active"}>
                                            Evictions
                                        </Button>
                                    )}
                                </Col>

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
                                            onClick={() => {navigate("/resources");}}
                                            className={location.pathname === "/resources" && "active"}>
                                            Resources
                                        </Button>
                                    )}
                                </Col>

                                <Col>
                                    {user ? (
                                        <nbsp/>
                                    ) : (
                                        <Button type="donate" style={{marginLeft: 18}}
                                            onClick={() => {navigate("/intake");}}>
                                            INTAKE
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
                                        // <LogoTextLight
                                        //     onClick={() => {setVisible(false);}}
                                        //     style={{color: "rgb(249, 147, 4)!important"}}
                                        //     >
                                        //     <Link to="/">CourtWatch</Link>
                                        // </LogoTextLight>
                                        <Link to="/"><img src={Logo2} style={{height: '30px', marginTop: '9px'}} alt="Boycott"/></Link>
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
                                        <Menu.Item key="intake">
                                            <Button type="donate" style={{marginLeft: 0}}
                                                onClick={() => {navigate("/intake");}}>
                                                INTAKE
                                            </Button>
                                        </Menu.Item>
                                        <Menu.Item key="evictions/">Evictions</Menu.Item>
                                        <Menu.Item key="rentals">Rentals</Menu.Item>
                                        <Menu.Item key="resources">Resources</Menu.Item>
                                        <Menu.Item key="donate" className="btn">DONATE</Menu.Item>
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

export default LayoutHeader;

