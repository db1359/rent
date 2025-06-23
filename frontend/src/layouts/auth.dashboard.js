import React, {Fragment} from 'react';
import {Col, Row} from "antd";
import Container from "../style/container";
import TopNav from "./navs/auth-topdashboard";

const AuthLayout = (props) => {
    const { children, side, side1 } = props;

    return (
        <Fragment>
            <TopNav/> 
            <Container>
                <Row gutter={[40, 24]}>
                    <Col span={5}>
                        {side}
                    </Col>
                    <Col span={19}>
                        <div style={{marginTop: 24, paddingBottom: 102}}>
                            {children}
                        </div>
                    </Col>
                    {/* <Col span={6}>
                        {side1}
                    </Col> */}
                </Row>
            </Container>
        </Fragment>
    );
};

export default AuthLayout;
