import React from 'react';
import TakeActionWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import {Col, Row, Space} from "antd";
import TakeActionItem from "./item";
import Image1 from '../../../../assets/img/trump.jpeg'
import Image2 from '../../../../assets/img/trump.jpeg'
import TakeActionForm from "./form";

const data = [
    {
        img: Image1,
        name: 'Event 1',
        fullName: 'Date',
        license: 'Time',
        content: <p>Description - Corrupt judge colluded with pedophile's attorney & DA to cover up sexual abuse of Arianna for personal gain.</p>
    },
    {
        img: Image2,
        name: 'Event 2',
        fullName: 'Date',
        license: 'Time',
        content: <p>Description - Corrupt judge colluded with pedophile's attorney & DA to cover up sexual abuse of Arianna for personal gain.</p>
    },
]

const TakeActionContent = () => {
    return (
        <TakeActionWrap>
            <Container>
                <Row
                    gutter={[40, 52]}
                >
                    <Col lg={{span: 17}} span={24}>
                        <Space
                            direction='vertical'
                            size={42}
                        >
                            {
                                data.map((person, index) => (
                                    <TakeActionItem key={index} person={person}/>
                                ))
                            }
                        </Space>
                    </Col>
                    <Col lg={{span: 7}} span={24}>
                        <TakeActionForm/>
                    </Col>
                </Row>
            </Container>
        </TakeActionWrap>
    );
};

export default TakeActionContent;
