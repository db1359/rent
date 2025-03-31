import React from 'react';
import VideoPlayer from "../../../../components/player";
import KidsVideosWrap from "../style/wrap";
import Container from "../../../../components/paper/container";
import {Col, Row, Space} from "antd";
import P1 from "../../../../components/paragraph";
import ChartImage from '../../../../assets/img/rentals2.png'

const KidsVideos = () => {
    return (
        <KidsVideosWrap>
            <Container>
                <Space direction='vertical' size={32} style={{width: '100%', paddingTop: '20px'}}>
                    <Row gutter={[32, 32]}>
                        <Col lg={{span: 24}} span={24}>
                            <Space direction='vertical' style={{width: '100%'}} size={32}>
                                <div style={{
                                        position: 'relative',
                                        paddingTop: '0%',
                                    }}>
                                    <img src={ChartImage} alt="Mogul"/>
                                    {/* <P1 style={{textAlign: 'center'}}>
                                        CourtWatch is a group collaboration app for users to share ideas, discuss and interact.
                                    </P1> */}
                                </div>
                            </Space>
                        </Col>
                    </Row>
                </Space>
            </Container>
        </KidsVideosWrap>
    );
};

export default KidsVideos;
