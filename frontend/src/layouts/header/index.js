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
import Logo from "../../assets/img/renter_logo.png";
import Logo2 from "../../assets/img/renter_logo2.png";
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

                                <Col>
                                    {user ? (
                                        <nbsp/>
                                    ) : (
                                        <Button type="headerlink"
                                            onClick={() => {navigate("/tenants/evictions");}}
                                            className={location.pathname === "/tenants/evictions" && "active"}>
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
                                            style={{color: "#000000!important"}}
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
                                        {/* <NavHashLink to="/arianna">Arianna's Story</NavHashLink> */}
                                        <Menu.Item key="signup">
                                            <Button type="donate" style={{marginLeft: 0}}
                                                onClick={() => {navigate("/signup");}}>
                                                SIGN UP
                                            </Button>
                                        </Menu.Item>
                                        <Menu.Item key="tenants">Tenants</Menu.Item>
                                        <Menu.Item key="tenants/evictions">Evictions</Menu.Item>
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

export default LayoutHeader;

