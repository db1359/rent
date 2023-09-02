import React from 'react';
import AriannaNewsWrap from "./style/wrap";
import Container from "../../../../../components/paper/container";
import {Card, Col, Row, Space} from "antd";
import CardTitle from "../../../../../components/heading/card";
import P1 from "../../../../../components/paragraph";
import VideoPlayer from "../../../../../components/player";
import styled from "styled-components"

const AriannaNews = () => {
    return (
        <AriannaNewsWrap>
            <Container>
                <Space
                    direction='vertical'
                    size={32}
                    style={{width: '100%'}}>
                    <Row
                        gutter={[32, 32]}>
                        <Col lg={{span: 17}} span={24}>
                            <Space direction='vertical' style={{width: '100%'}} size={32}>
                                <div
                                    style={{
                                        position: 'relative',
                                        paddingTop: '',
                                    }}
                                >
                                    <Card
                                        bordered={false}
                                        style={{textAlign: 'center'}}
                                        cover={<VideoPlayer url='https://youtu.be/dRygvFlcNg8'/>}
                                    >
                                        <CardTitle>
                                            Daddy Daughter Visit
                                        </CardTitle>
                                        <P1>
                                            Arianna's mother dropped off a little girl in the middle of a massive
                                            noisy Whole Foods and left. She was lost searching. Arianna is being
                                            used by her mother, Cynthia Lie, BJ Fadem, Nathelie Ferro and others as
                                            their ATM to extort money from her dad.
                                        </P1>
                                    </Card>
                                </div>
                            </Space>
                        </Col>
                        <Col lg={{span: 7}} span={24}>
                            <ActionFormCard>
                                <CardTitle style={{marginBottom: 32}}>
                                    Donate
                                </CardTitle>
                                <CardTitle style={{marginBottom: 32}}>
                                    <img
                                        src={'https://glitters.app/static/media/paypalqrcode.9f13c28557abe5d13a0c.png'}
                                        alt=""/>
                                </CardTitle>
                            </ActionFormCard>
                        </Col>
                    </Row>
                </Space>
            </Container>
        </AriannaNewsWrap>
    );
};

const ActionFormCard = styled(Card)`
  box-shadow: none;
  border: none;
  background: linear-gradient(to top, #f4e1ff, #f4e1ff);
  border-radius: 12px;
  padding: 0px;

  h2 {
    text-align: center;
    //font-size: 28px;
    margin-bottom: 0px;
  }

  h3 {
    font-size: 24px;
    text-align: center;
    margin-bottom: 0px;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`

export default AriannaNews;
