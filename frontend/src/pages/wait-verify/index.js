import React from 'react';
import Container from "../../style/container";
import {Col, Row} from "antd";
import AuthWrap from "../../style/auth-wrap";

const WaitVerifyPage = () => {
    return (
        <Container>
            <Row>
                <Col span={10} offset={7}>
                    <AuthWrap>
                        <h5 style={{fontSize: 24, textAlign: "center", padding: "42px 0", fontWeight: 700}}>
                            A verification email has been sent to your email. <br/>Please click to verify to sign in
                        </h5>
                    </AuthWrap>
                </Col>
            </Row>
        </Container>
    );
};

export default WaitVerifyPage;