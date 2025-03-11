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
                        <h1>For Renters</h1>
                        <br></br>
<h3>Rent Stabilization Ordinance (RSO):</h3>
If your rental unit was built on or before October 1, 1978, it may be subject to the RSO, which regulates rents and evictions. 
<br></br><br></br>
<h3>Just Cause Ordinance (JCO):</h3>
Effective January 27, 2023, your rental unit may be covered under the city&apos;s Just Cause Ordinance (JCO). 
<br></br><br></br>
<h3>Tenant Habitability Program:</h3>
This program protects tenants from untenantable housing conditions and/or forced permanent displacement.
<br></br><br></br>
<h3>Renter Protections:</h3>
The LAHD offers resources and services to ensure renters&apos; rights are protected and they are living under safe conditions. 
<br></br><br></br>
<h3>Eviction Protection:</h3>
There are eviction protections for tenants who have unauthorized persons or pets displaced due to recent fires, with a deadline of March 25, 2025, to notify landlords. 
<br></br><br></br>
<h3>LA County Rent Relief:</h3>
The Los Angeles County Rent Relief program has exhausted all available funding, and application review has ceased. 
<br></br><br></br>
<h3>Housing.LACounty.gov:</h3>
This community resource helps people list and locate housing in the County of Los Angeles, including affordable, special needs, and emergency housing. 
                        </Col>
                        {/* <Col md={{span: 3}} span={24}>
                            <img src="https://companiesmarketcap.com/img/company-logos/256/MCD.webp" style={{padding: 5}}></img>
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
