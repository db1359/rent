import React from 'react';
import AboutMainWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import SectionTitle from "../../../../components/heading/section";
import {Button, Card, Col, Row, Space} from "antd";
import VideoPlayer from "../../../../components/player";
import CardTitle from "../../../../components/heading/card";
import P1 from "../../../../components/paragraph";
import Img1 from "../../../../assets/img/painting.jpg"
import Img2 from "../../../../assets/img/arianna-poster200.png"
import Img3 from "../../../../assets/img/isaac.jpg"
import KidsChart from "../../components/chart";
import ChartImage from '../../../../assets/img/courtwatchsplash.png'
import styled from "styled-components"
import {Icon} from '@iconify/react';

const AboutMain = () => {
    return (
        <AboutMainWrap>
            <Container>
                <Space direction='vertical' size={32} style={{width: '100%', paddingTop: '20px'}}>
                    <Row gutter={[32, 32]}>
                        <Col lg={{span: 24}} span={24}>
                            <Space direction='vertical' style={{width: '100%'}} size={32}>
                                <div style={{
                                        position: 'relative',
                                        paddingTop: '0%',
                                    }}>
                                    <img src={ChartImage} alt=""/>
                                    {/* <P1 style={{textAlign: 'center'}}>
                                        CourtWatch is a group collaboration app for users to share ideas, discuss and interact.
                                    </P1> */}
                                </div>
                            </Space>
                        </Col>
                        {/* <Col lg={{span: 6}} span={24} style={{width: '100%', paddingTop: '30px'}}>
                            <>
                            <CardTitle style={{paddingBottom: 20,}}>
                                    Follow<br/>
                                    <Button
                                    target='_blank'
                                    href='https://twitter.com/glitter_app'
                                    shape="circle"
                                    type="primary"
                                    color="pink"
                                    size="large"
                                    style={{
                                        color: "#ffffff",
                                        backgroundColor: "#8f3dce",
                                        marginTop: 10,
                                    }}>
                                    <Icon icon="mdi:twitter" style={{width: 32, height: 32}}/>
                                </Button>
                            </CardTitle>

                            <ActionFormCard>
                                <CardTitle style={{marginBottom: 20}}>
                                    Donate
                                </CardTitle>
                                <CardTitle style={{marginBottom: 20}}>
                                    <img
                                        src={'https://glitters.app/static/media/paypalqrcode.9f13c28557abe5d13a0c.png'}
                                        alt=""/>
                                </CardTitle>
                            </ActionFormCard>
                            </>
                        </Col> */}
                    </Row>
                </Space>
            </Container>
        </AboutMainWrap>
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

export default AboutMain;
