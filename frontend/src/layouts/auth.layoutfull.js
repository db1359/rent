import React, {Fragment} from 'react';
import {Col, Row} from "antd";
import Container from "../style/container";
import AuthLeftNav from "./navs/auth-left";

const AuthLayout = (props) => {
    const { children, side } = props;

    return (
        <Fragment>
            <Container>
                <Row gutter={[40, 24]}>
                    <Col span={5}>
                        <AuthLeftNav/>
                    </Col>
                    <Col span={19}>
                        <div style={{marginTop: 24, paddingBottom: 102}}>
                            {children}
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default AuthLayout;
