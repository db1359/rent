import React from 'react';
import NotfoundWrap from "./style/wrap";
import Container from "../../style/container";
import {Button} from "antd";
import {Icon} from "@iconify/react"

const NotFoundPage = () => {
    return (
        <Container>
            <NotfoundWrap>
                <h1>404</h1>
                <p>Page Not Found</p>
                <Button
                    href="/"
                    type="primary"
                    size="large"
                    icon={<Icon icon="ic:baseline-home"/>}
                >
                    Go to Home
                </Button>
            </NotfoundWrap>
        </Container>
    );
};

export default NotFoundPage;
