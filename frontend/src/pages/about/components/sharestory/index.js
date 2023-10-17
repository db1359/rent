import React from 'react';
import AboutMainWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import {Card, Col, Row, Space} from "antd";
import CardTitle from "../../../../components/heading/card";
import P1 from "../../../../components/paragraph";
import Img1 from "../../../../assets/img/sharestory1.png"
import Img2 from "../../../../assets/img/sharestory2.png"
import Img3 from "../../../../assets/img/sharestory3.png"

const AboutMain = () => {
    return (
        <AboutMainWrap>
            <Container>
                <Space
                    direction='vertical'
                    size={32}
                    style={{width: '100%'}}
                >
                    <Row
                        gutter={[32, 32]}
                    >
                        <Col lg={{span: 17}} span={24}>
                            <Space
                                direction='vertical'
                                style={{width: '100%'}}
                                size={32}
                            >
                                <div>
                                    <CardTitle style={{textAlign: 'left'}}>
                                        Follow These Steps To Share Your Story
                                    </CardTitle>
                                    <P1><br></br>
                                        1. Go to your <b>Profile</b> page and click the <b>Story</b> tab.
                                    </P1>
                                    <Card
                                            bordered={false}
                                            style={{textAlign: 'center', border: '0.5px solid black'}}
                                            cover={<img src={Img1} alt=''/>}
                                        >
                                    </Card>
                                    <P1><br></br>
                                        2. In the fields add a photo or video, title and content to your story. From the drop box select State, County and individuals involved in your case. Others are having the same problem you are having with them. Click "Update Story". <i>Don't find the individuals involved in your case? Go to <b><a href='https://courtwatch.live/dir'>Directory</a></b> and add them</i>.
                                    </P1>
                                    <Card
                                            bordered={false}
                                            style={{textAlign: 'center', border: '0.5px solid black'}}
                                            cover={<img src={Img2} alt=''/>}
                                        >
                                    </Card>
                                    <P1><br></br>
                                        3. To get donations from the community add a QR code and click "Upload Donate Image".
                                    </P1>
                                    <Card
                                            bordered={false}
                                            style={{textAlign: 'center', border: '0.5px solid black'}}
                                            cover={<img src={Img3} alt=''/>}
                                        >
                                    </Card>
                                </div>
                            </Space>
                        </Col>
                        <Col lg={{span: 7}} span={24}>
                            <>

                            </>
                        </Col>
                    </Row>
                </Space>
            </Container>
        </AboutMainWrap>
    );
};

export default AboutMain;
