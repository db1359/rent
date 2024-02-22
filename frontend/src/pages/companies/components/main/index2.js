import React from 'react';
import AboutMainWrap from "../style/wrap";
import Container from "../../../../components/paper/container";
import SectionTitle from "../../../../components/heading/section";
import {Card, Col, Row, Space} from "antd";
import VideoPlayer from "../../../../components/player";
import CardTitle from "../../../../components/heading/card";
import P1 from "../../../../components/paragraph";
import Img1 from "../../../../assets/img/painting.jpg"
import Img2 from "../../../../assets/img/arianna-poster200.png"
import Img3 from "../../../../assets/img/isaac.jpg"
import KidsChart from "../chart";
import ChartImage from '../../../../assets/img/chart.png'
import styled from "styled-components"

const AboutMain2 = () => {
    return (
        <AboutMainWrap>
            <Container>
                <Space direction='vertical' size={32} style={{width: '100%'}}>
                    <Row gutter={[32, 32]}>
                        {/* <Col lg={{span: 18}} span={24} style={{paddingTop: 35}}> */}
                        <Col lg={{span: 12}} span={24} style={{paddingTop: 35}}>    
                            <Space direction='vertical' style={{width: '100%'}} size={32}> 
                                <div style={{
                                        position: 'relative',
                                        paddingTop: '56.25%',
                                    }}>
                                    <iframe
                                        src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FADVOCATEUSA%2Fvideos%2F339240747959343%2F&show_text=false&width=560&t=0"
                                        width="100%"
                                        height="100%"
                                        style={{
                                            border: 'none',
                                            overflow: 'hidden',
                                            position: 'absolute',
                                            left: '0',
                                            top: '0'
                                        }}
                                        scrolling="no"
                                        frameBorder="0"
                                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                        allowFullScreen={true}
                                    />
                                </div>
                                <div>
                                    <CardTitle style={{textAlign: 'left'}}>
                                        Hollywood March For Kids
                                    </CardTitle>
                                    <P1>
                                        02/19/2022 - AdvocateTV&apos;s Susan Schofield, reporting from Hollywood with Daya Baran about his daughter Arianna&apos;s child sexual abuse coverup by
                                        California AG Rob Bonta, corrupt judge Cynthia Lie, unscrupulous fraudsters BJ
                                        Fadem, Kathrina Ohde, extortionists Nathalie Ferro Da Costa, Kevin Boileau, Joe
                                        Perez, Shalini Venktash, child abusers Reshma Kumar, Vikaash Kumar & 
                                        pedophile Ganraj Kumar.
                                    </P1>
                                </div>
                            </Space>
                        </Col>
                        <Col lg={{span: 12}} span={24} style={{paddingTop: 35}}>    
                            <Space direction='vertical' style={{width: '100%'}} size={32}> 
                                <div style={{
                                        position: 'relative',
                                        paddingTop: '56.25%',
                                    }}>
                                    <img 
                                        src="https://www.witf.io/wp-content/uploads/2022/08/Untitled-design-1-1920x1080.jpg"
                                        width="100%"
                                        height="100%"
                                        style={{
                                            border: 'none',
                                            overflow: 'hidden',
                                            position: 'absolute',
                                            left: '0',
                                            top: '0'
                                        }}
                                    />
                                </div>
                                <div>
                                    <CardTitle style={{textAlign: 'left'}}>
                                    Kids-For-Cash Judges Ordered Pay $200M Plus
                                    </CardTitle>
                                    <P1>
                                    08/17/2022 - Two former Pennsylvania judges who orchestrated a scheme to send children to for-profit
                                    jails in exchange for kickbacks have been ordered to pay more than $200 million to
                                    hundreds of people they victimized in one of the worst judicial scandals in U.S. history. 
                                    <a rel="noreferrer"
                                        href="https://www.usnews.com/news/politics/articles/2022-08-17/kids-for-cash-judges-ordered-to-pay-more-than-200m"
                                        target={"_blank"}> More
                                    </a>
                                    </P1>
                                </div>
                            </Space>
                        </Col>
                    </Row>
                </Space>
            </Container>
            <Container>
                    <Row
                        gutter={[20, 20]}
                    >
                        <Col md={{span: 8}} span={24}>
                            <VideoPlayer url={'https://www.youtube.com/watch?v=HfRDZ4iOnSo'}/>
                            <br></br><h1>Divorce Corp</h1>
                        </Col>
                        <Col md={{span: 8}} span={24}>
                            <VideoPlayer url={'https://www.youtube.com/watch?v=KLCsbtS9dUA'}/>
                            <br></br><h1>Erasing Families</h1>
                        </Col>
                        <Col md={{span: 8}} span={24}>
                            <VideoPlayer url={'https://www.youtube.com/watch?v=xp-HX9XuYZg'}/>
                            <br></br><h1>Breaking Up Families</h1>
                        </Col>
                    </Row>
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

export default AboutMain2;