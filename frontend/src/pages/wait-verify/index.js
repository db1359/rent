import React from 'react';
import Container from "../../style/container";
import {Col, Row} from "antd";
import AuthWrap from "../../style/auth-wrap";

const WaitVerifyPage = () => {
    return (
        <Container>
            <Row style={{paddingTop: 100}}>
                <Col span={10} offset={7}>
                    <AuthWrap>
                        <h2 style={{paddingTop: 42}}>
                            Email Verification
                        </h2>
                        <h5 style={{fontSize: 18, textAlign: "center", padding: "24px 0 42px", fontWeight: 700}}>
                            A verification email has been sent to your email. Please click to verify to sign in
                        </h5>
                    </AuthWrap>
                </Col>
            </Row>
        </Container>
    );
};

export default WaitVerifyPage;