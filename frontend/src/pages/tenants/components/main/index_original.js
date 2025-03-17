import React from 'react';
import AboutMainWrap from "../style/wrap";
import Container from "../../../../components/paper/container";
import SectionTitle from "../../../../components/heading/section";
import {Button, Card, Col, Row, Space} from "antd";
import VideoPlayer from "../../../../components/player";
import CardTitle from "../../../../components/heading/card";
import P1 from "../../../../components/paragraph";
import Img1 from "../../../../assets/img/painting.jpg"
import Img2 from "../../../../assets/img/arianna-poster200.png"
import Img3 from "../../../../assets/img/isaac.jpg"
import ChartImage from '../../../../assets/img/rentalapp.jpg'
import styled from "styled-components"
import {Icon} from '@iconify/react';

const AboutMain = () => {
    return (
        <AboutMainWrap>
            <Container>
                <Space direction='vertical' size={32} style={{width: '100%', paddingTop: '30px'}}>
                    <Row gutter={[32, 32]}>
                        <Col lg={{span: 18}} span={24}>
                            <Space direction='vertical' style={{width: '100%'}} size={32}>
                                <div style={{
                                        position: 'relative',
                                        paddingTop: '0%',
                                    }}>
                                    <img src={ChartImage} alt=""/>
                                    <P1><br></br>
                                    Eviction is a legal process where a landlord seeks to remove a tenant from a rental property, typically after a notice period and potentially a court case. Eviction notices can be for various reasons, including non-payment of rent, lease violations, or no-fault reasons like owner move-in or property withdrawal. 
                                    </P1>
                                </div>
                            </Space>
                        </Col>
                        <Col lg={{span: 6}} span={24} style={{width: '100%', paddingTop: '30px'}}>
                            <>
                            <CardTitle style={{paddingBottom: 20,}}>
                                    <Button
                                    target='_blank'
                                    href='/channel/AbolishFamilyCourt'
                                    shape="rectangle"
                                    type="primary"
                                    color="pink"
                                    size="large"
                                    style={{
                                        color: "#ffffff",
                                        backgroundColor: "#9701fc",
                                        marginTop: 0,
                                    }}>
                                    Start Intake
                                </Button>
                            </CardTitle>

                            {/* <ActionFormCard>
                                <CardTitle style={{marginBottom: 20}}>
                                    Donate
                                </CardTitle>
                                <CardTitle style={{marginBottom: 20}}>
                                    <img
                                        src={'https://EDN/static/media/paypalqrcode.9f13c28557abe5d13a0c.png'}
                                        alt=""/>
                                </CardTitle>
                            </ActionFormCard> */}
                                {/* <CardTitle>
                                    20,904,371
                                </CardTitle>
                                <CardTitle style={{marginBottom: 32}}>
                                    Kids Abused By Courts
                                </CardTitle>
                                <a
                                    rel='noreferrer'
                                    href='https://www.facebook.com/isaac.doe1'
                                    target='_blank'
                                >
                                    <img src={Img3} alt=""/>
                                </a>
                                <CardTitle style={{marginBottom: 32}}>
                                    <a
                                        rel='noreferrer'
                                        href='https://www.facebook.com/isaac.doe1'
                                        target='_blank'
                                    >
                                        #JusticeForCaasi
                                    </a>
                                </CardTitle>
                                <a
                                    rel='noreferrer'
                                    href='https://www.latimes.com/la-he-0629-schizophrenia-pictures-photogallery.html'
                                    target='_blank'
                                >
                                    <img src='https://ca-times.brightspotcdn.com/dims4/default/2516d02/2147483647/strip/true/crop/586x433+0+0/resize/586x433!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F6b%2Ff7%2Fbd9258cc96bfb36e128c0b352ec1%2Fla-he-schizo01-kklbh5nc' alt=""/>
                                </a>
                                <CardTitle>
                                    <a
                                        rel='noreferrer'
                                        target='_blank'
                                        href='https://www.latimes.com/la-he-0629-schizophrenia-pictures-photogallery.html'
                                    >
                                        #JusticeForBohdi
                                    </a>
                                </CardTitle> */}
                            </>
                        </Col>
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
