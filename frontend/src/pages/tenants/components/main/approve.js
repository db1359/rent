import React from 'react';
import AboutMainWrap from "../style/wrap";
import Container from "../../../../components/paper/container";
import SectionTitle from "../../../../components/heading/section";
import {Button, Card, Col, Row, Space} from "antd";
import VideoPlayer from "../../../../components/player";
import CardTitle from "../../../../components/heading/card";
import ChartImage from '../../../../assets/img/tenantapprove.png'
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
                                    
                                </div>
                            </Space>
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
