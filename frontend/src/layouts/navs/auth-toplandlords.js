import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Button, Col, Row} from "antd";
import Container from "../../style/container";
import TopNavWrap from "./style/topnav-wrap";
import axios from "axios";
import config from "../../config";
import {useSelector} from "react-redux";

const LayoutHeader = () => {
    const [visible, setVisible] = useState(false);
    const [scroll, setScroll] = useState(0);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const auth = useSelector(state => state.auth)
    const [add, setAdd] = useState(false);


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
                                            navigate("/landlords");
                                        }}
                                        className={location.pathname === "/landlords" && "active"}>
                                        Rental Applications
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
                                            navigate("/resources/forms");
                                        }}
                                        className={location.pathname === "/resources/forms" && "active"}>
                                        Tenant Screening
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
                                            navigate("/resources/webinars");
                                        }}
                                        className={location.pathname === "/resources/webinars" && "active"}>
                                        Leases
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
                                            navigate("/resources/webinars");
                                        }}
                                        className={location.pathname === "/resources/webinars" && "active"}>
                                        Online Rent Payments
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
                                            navigate("/resources/webinars");
                                        }}
                                        className={location.pathname === "/resources/webinars" && "active"}>
                                        Maintence Requests
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
                                            navigate("/resources/webinars");
                                        }}
                                        className={location.pathname === "/resources/webinars" && "active"}>
                                        Tenants Notices
                                    </Button>
                                )}
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </TopNavWrap>
    );
};

export default LayoutHeader;

