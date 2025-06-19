import React from 'react';
import AboutMainWrap from "../style/wrap";
import Container from "../../../../components/paper/container";
import SectionTitle from "../../../../components/heading/section";
import {Button, Card, Col, Row, Space} from "antd";
import ChartImage1 from '../../../../assets/img/tenant1.png'
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
                        <Col lg={{span: 16}} span={AuthLayout}>
                            <Space direction='vertical' style={{width: '100%'}} size={32}>
                                <div style={{
                                        position: 'relative',
                                        paddingTop: '0%',
                                    }}>
                                    {/* Setup your ID once and use it over and over when applying for rentals.<br/><br/> */}
                                    {/* No more filling out the same information over and over again. */}

<b>Identity Verification and Protection</b> is a critical component of modern business operations, offering a wide range of benefits that enhance security, compliance and efficiency. It offers numerous benefits such as:<br/><br/>

<b>1. Saves Time</b><br/>
Automates the verification process, reducing the need for manually enter personal details over and over.
<br/><br/>
<b>2. Fraud Prevention</b><br/>
Verifying identities helps prevent fraudulent activities such as identity theft, account takeovers, and unauthorized access.
<br/><br/>
<b>3. Enhanced Security</b><br/>
Ensures that sensitive information is only accessible to verified individuals, reducing the risk of data breaches.
<br/><br/>
<b>4. Monitoring and Alerts</b><br/>
Continuous monitoring of verified identities can help in detecting suspicious activities early.
<br/><br/>
<b>5. Access Control</b><br/>
Provides one click access to services, enhancing overall security and a record of identity verification activities.
<br/><br/>

{/* 2. Regulatory Compliance

KYC (Know Your Customer): Helps businesses comply with regulatory requirements by verifying the identity of customers, which is crucial in industries like banking and finance.

AML (Anti-Money Laundering): Aids in detecting and preventing money laundering activities by ensuring that customers are who they claim to be.


3. Improved User Experience

Streamlined Onboarding: Simplifies the process of signing up for services by automating identity checks, reducing the need for manual verification.

Faster Transactions: Enables quicker processing of transactions by ensuring that all parties involved are verified and trustworthy.


4. Trust and Reputation

Customer Confidence: Builds trust among users by ensuring that only legitimate individuals can access services, thereby enhancing the platform’s reputation.

Brand Integrity: Protects the brand from being associated with fraudulent activities, which can damage public perception.


5. Operational Efficiency

Reduced Manual Labor: Automates the verification process, reducing the need for manual checks and freeing up resources for other tasks.

Lower Costs: Decreases the expenses associated with fraud, manual verification, and regulatory fines.


6. Access Control

Restricted Access: Ensures that only authorized individuals can access certain services or areas, enhancing overall security.

Audit Trails: Provides a record of identity verification activities, which can be useful for audits and investigations.


7. Global Reach

Cross-Border Transactions: Facilitates international business by verifying identities across different jurisdictions, ensuring compliance with local laws.

Diverse User Base: Allows businesses to serve a global customer base while maintaining high security and compliance standards.


8. Risk Management

Assessing Risk Levels: Helps in evaluating the risk associated with different users, enabling businesses to take appropriate measures.

Monitoring and Alerts: Continuous monitoring of verified identities can help in detecting suspicious activities early.


9. Legal Protection

Documentation: Provides documented proof of identity verification, which can be crucial in legal disputes or regulatory audits.

Liability Reduction: Reduces the liability of businesses by demonstrating that they have taken reasonable steps to verify identities.


10. Customer Insights

Data Accuracy: Ensures that customer data is accurate and up-to-date, which is valuable for personalized marketing and customer service.

Behavioral Analysis: Verified identities allow for more accurate analysis of customer behavior and preferences.


Overall, ID verification is a critical component of modern business operations, offering a wide range of benefits that enhance security, compliance, efficiency, and customer trust. */}
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
