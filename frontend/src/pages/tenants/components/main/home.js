import React from 'react';
import AboutMainWrap from "../style/wrap";
import Container from "../../../../components/paper/container";
import SectionTitle from "../../../../components/heading/section";
import {Button, Card, Col, Row, Space} from "antd";
import VideoPlayer from "../../../../components/player";
import CardTitle from "../../../../components/heading/card";
import ChartImage1 from '../../../../assets/img/tenant1.png'
import ChartImage2 from '../../../../assets/img/tenant2.png'
import ChartImage3 from '../../../../assets/img/tenant3.png'
import ChartImage4 from '../../../../assets/img/tenant4.png'
import ChartImage5 from '../../../../assets/img/tenant5.png'
import styled from "styled-components"
import {Icon} from '@iconify/react';
import AuthLayout from '../../../../layouts/auth.layout';

const AboutMain = () => {
    return (
        <AboutMainWrap>
            <Container>
                <Space direction='vertical' size={32} style={{width: '100%', paddingTop: '0px'}}>
                    <Row gutter={[32, 32]}>
                        <Col lg={{span: 2}} span={AuthLayout}>
                            
                        </Col>
                        <Col lg={{span: 4}} span={AuthLayout}>
                            <Space direction='vertical' style={{width: '100%'}} size={32}>
                                <div style={{
                                        position: 'relative',
                                        paddingTop: '0%',
                                    }}>
                                    <img src={ChartImage1} alt=""/>
                                    
                                </div>
                            </Space>
                        </Col>
                        <Col lg={{span: 4}} span={AuthLayout}>
                            <Space direction='vertical' style={{width: '100%'}} size={32}>
                                <div style={{
                                        position: 'relative',
                                        paddingTop: '0%',
                                    }}>
                                    <img src={ChartImage2} alt=""/>
                                    
                                </div>
                            </Space>
                        </Col>
                        <Col lg={{span: 4}} span={AuthLayout}>
                            <Space direction='vertical' style={{width: '100%'}} size={32}>
                                <div style={{
                                        position: 'relative',
                                        paddingTop: '0%',
                                    }}>
                                    <img src={ChartImage3} alt=""/>
                                    
                                </div>
                            </Space>
                        </Col>
                        <Col lg={{span: 4}} span={AuthLayout}>
                            <Space direction='vertical' style={{width: '100%'}} size={32}>
                                <div style={{
                                        position: 'relative',
                                        paddingTop: '0%',
                                    }}>
                                    <img src={ChartImage4} alt=""/>
                                    
                                </div>
                            </Space>
                        </Col>
                        <Col lg={{span: 4}} span={AuthLayout}>
                            <Space direction='vertical' style={{width: '100%'}} size={32}>
                                <div style={{
                                        position: 'relative',
                                        paddingTop: '0%',
                                    }}>
                                    <img src={ChartImage5} alt=""/>
                                    
                                </div>
                            </Space>
                        </Col>
                        <Col lg={{span: 2}} span={AuthLayout}>
                            
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
