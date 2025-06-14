import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Button, Col, Row} from "antd";
import Container from "../../style/container";
import TopNavWrap from "./style/topnav-wrap";
import axios from "axios";
import config from "../../config";

const LayoutHeader = () => {
    const [visible, setVisible] = useState(false);
    const [scroll, setScroll] = useState(0);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const navigateHandler = data => {
        setVisible(false);
        if (data.key !== "#arianna") {
            navigate(data.key);
        }
    };

    useEffect(() => {
        // find logged in user
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

        <TopNavWrap>
            <Container>
                <Row align='middle' justify='space-between' gutter={[40, 12]}>
                    <Col lg={{span: 24}} span={24}>
                        <Row gutter={64} justify="left">

                            <Col>
                                {user ? (
                                    <nbsp/>
                                ) : (
                                    <Button
                                        type="communitylink"
                                        onClick={() => {
                                            navigate("/tenants");
                                        }}
                                        className={location.pathname === "/tenants" && "active"}
                                    >
                                        Home
                                    </Button>
                                )}
                            </Col>
                            
                            <Col>
                                {user ? (
                                    <nbsp/>
                                ) : (
                                    <Button
                                        type="communitylink"
                                        onClick={() => {
                                            navigate("/tenants/#");
                                        }}
                                        className={location.pathname === "/tenants/#" && "active"}>
                                        Easy Apply
                                    </Button>
                                )}
                            </Col>

                            <Col>
                                {user ? (
                                    <nbsp/>
                                ) : (
                                    <Button
                                        type="communitylink"
                                        onClick={() => {
                                            navigate("/tenants/#");
                                        }}
                                        className={location.pathname === "/tenants/#" && "active"}>
                                        Pay Rent
                                    </Button>
                                )}
                            </Col>

                            <Col>
                                {user ? (
                                    <nbsp/>
                                ) : (
                                    <Button
                                        type="communitylink"
                                        onClick={() => {
                                            navigate("/tenants/maintenance");
                                        }}
                                        className={location.pathname === "/tenants/maintenance" && "active"}>
                                        Maintenance Requests
                                    </Button>
                                )}
                            </Col>

                            {/* <Col>
                                {user ? (
                                    <nbsp/>
                                ) : (
                                    <Button
                                        type="communitylink"
                                        onClick={() => {
                                            navigate("/tenants/evictions");
                                        }}
                                        className={location.pathname === "/tenants/evictions" && "active"}>
                                        Evictions
                                    </Button>
                                )}
                            </Col> */}

                            {/* <Col>
                                {user ? (
                                    <nbsp/>
                                ) : (
                                    <Button
                                        type="communitylink"
                                        onClick={() => {
                                            navigate("/recalls");
                                        }}
                                        className={location.pathname === "/recalls" && "active"}>
                                        Recalls
                                    </Button>
                                )}
                            </Col> */}

                            {/* <Col>
                                {user ? (
                                    <nbsp/>
                                ) : (
                                    <Button
                                        type="communitylink"
                                        onClick={() => {
                                            navigate("/channels/legalabusesyndrome");
                                        }}
                                        className={location.pathname === "/channels/legalabusesyndrome" && "active"}>
                                        Legal Abuse
                                    </Button>
                                )}
                            </Col> */}

                            {/* <Col>
                                {user ? (
                                    <nbsp/>
                                ) : (
                                    <Button
                                        type="communitylink"
                                        onClick={() => {
                                            navigate("/channel");
                                        }}
                                        className={location.pathname === "/channel" && "active"}>
                                        More Channels
                                    </Button>
                                )}
                            </Col> */}

                            {/* <Col>
                                {user ? (
                                    <nbsp/>
                                ) : (
                                    <Button
                                        type="communitylink"
                                        onClick={() => {
                                            navigate("/#");
                                        }}
                                        className={location.pathname === "/#" && "active"}
                                    >
                                        Legal Abuse (coming)
                                    </Button>
                                )}
                            </Col>

                            <Col>
                                {user ? (
                                    <nbsp/>
                                ) : (
                                    <Button
                                        type="communitylink"
                                        onClick={() => {
                                            navigate("/#");
                                        }}
                                        className={location.pathname === "/#" && "active"}
                                    >
                                        Resources (coming)
                                    </Button>
                                )}
                            </Col> */}

                        </Row>
                    </Col>
                    {/* <Col lg={{span: 12}} span={24}>
                        <Row justify="flex-end" gutter={64} style={{justifyContent: "flex-end"}}>

                            {/* <Col>
                                {user ? (
                                    <nbsp/>
                                ) : (
                                    <Button
                                        type="communitylink"
                                        onClick={() => {
                                            navigate("/about/share");
                                        }}
                                        className={location.pathname === "/about/share" && "active"}
                                    >
                                        Share Your Story
                                    </Button>
                                )}
                            </Col>

                            <Col>
                                {user ? (
                                    <nbsp/>
                                ) : (
                                    <Button
                                        type="communitylink"
                                        onClick={() => {
                                            navigate("/donate");
                                        }}
                                    >
                                        DONATE
                                    </Button>
                                )}
                            </Col>

                        </Row>
                    </Col> */}
                </Row>
            </Container>
        </TopNavWrap>
    );
};

export default LayoutHeader;

