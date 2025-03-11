import React from 'react';
import VideoPlayer from "../../../../components/player";
import KidsVideosWrap from "../style/wrap";
import Container from "../../../../components/paper/container";
import {Col, Row, Space} from "antd";
import P1 from "../../../../components/paragraph";

const KidsVideos = () => {
    return (
        <KidsVideosWrap>
            <Container>
                <Space direction='vertical' size={24}>
                    <Row gutter={[20, 20]}>
                        <Col md={{span: 24}} span={24}>
                        <h1>Search Rental Listing</h1>
                        <img src="https://www.lifewire.com/thmb/5mfawD5NNFPC7HWK0c78yiGeOSI=/1340x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/zumper-apartment-search-engine-a2365765e1f4435c91969f9eeaa43079.png" style={{padding: 5}}></img>
                        </Col>
                        {/* <Col md={{span: 3}} span={24}>
                            <img src="https://www.lifewire.com/thmb/5mfawD5NNFPC7HWK0c78yiGeOSI=/1340x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/zumper-apartment-search-engine-a2365765e1f4435c91969f9eeaa43079.png" style={{padding: 5}}></img>
                        </Col>
                        <Col md={{span: 3}} span={24}>
                            <img src='https://companiesmarketcap.com/img/company-logos/256/HPE.webp' style={{padding: 5}}></img>
                        </Col>
                        <Col md={{span: 3}} span={24}>
                            <img src='https://sharon-arami.com/wp-content/uploads/2022/01/%D7%9C%D7%99%D7%A0%D7%A7%D7%93%D7%90%D7%99%D7%9F-%D7%9C%D7%95%D7%92%D7%95-1024x640.png' style={{marginTop:'27px', padding: 5}}></img>
                        </Col>
                        <Col md={{span: 3}} span={24}>
                            
                        </Col>
                        <Col md={{span: 3}} span={24}>
                            
                        </Col>
                        <Col md={{span: 3}} span={24}>
                            
                        </Col>
                        <Col md={{span: 3}} span={24}>
                            
                        </Col> */}
                    </Row>
                    <div>
                        <P1>
                            
                        </P1>   
                    </div>
                </Space>
            </Container>
        </KidsVideosWrap>
    );
};

export default KidsVideos;
