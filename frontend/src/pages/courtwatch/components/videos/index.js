import React from 'react';
import VideoPlayer from "../../../../components/player";
import KidsVideosWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import {Col, Row, Space} from "antd";
import P1 from "../../../../components/paragraph";
import SectionTitle from "../../../../components/heading/section";

const KidsVideos = () => {
    return (
        <KidsVideosWrap>
            <SectionTitle style={{width: "100%", marginTop: 30, marginBottom: 30}}>
                    $100 Billion Industry Designed to Destroy Families
            </SectionTitle>
            <Container>
                <Space
                    direction='vertical'
                    size={32}
                >
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
                </Space>
            </Container>
        </KidsVideosWrap>
    );
};

export default KidsVideos;
