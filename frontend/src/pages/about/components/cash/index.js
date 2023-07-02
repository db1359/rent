import React from 'react';
import AriannaNewsWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import SectionTitle from "../../../../components/heading/section";
import {Card, Col, Row, Space} from "antd";
import CardTitle from "../../../../components/heading/card";
import Cover1 from "../../../../assets/img/kidsforcashjudge.jpeg"
import P1 from "../../../../components/paragraph";

const data = [
    {
        cover: Cover1,
        pdf: `https://www.usnews.com/news/politics/articles/2022-08-17/kids-for-cash-judges-ordered-to-pay-more-than-200m`,
        title: '',
        items: [
            ``,
            ''
        ]
    }
]

const HomeExtortion = () => {
    return (
        <AriannaNewsWrap>
            <Container>
                <Space
                    direction='vertical'
                    size={32}
                    style={{width: '100%'}}
                >
                    <SectionTitle>
                        Kids For Cash
                    </SectionTitle>

                    <Row gutter={[40, 40]}>
                        {
                            data.map((dat, key) => (
                                <Col lg={12} key={key}>
                                    <Card
                                        style={{textAlign: 'center'}}
                                        cover={
                                            <a
                                                rel="noreferrer"
                                                style={{display: 'block', width: '100%'}}
                                                target='_blank'
                                                href={dat.pdf}
                                            >
                                                {/* <embed src={dat.cover} type="application/pdf" height={'300'} width={'100%'} /> */}
                                                <img src={dat.cover} height={300}
                                                     style={{objectFit: 'cover', width: '100%'}} alt=""/>
                                            </a>
                                        }
                                        bordered={false}
                                        className='pdf-card'
                                    >
                                        <CardTitle>
                                            <a
                                                rel="noreferrer"
                                                href={dat.pdf}
                                                target='_blank'
                                            >
                                                {dat.title}
                                            </a>
                                        </CardTitle>
                                        {
                                            dat.items.map((item, index) => (
                                                <p key={`index${index}`}>
                                                    {item}
                                                </p>
                                            ))
                                        }
                                    </Card>
                                </Col>

                            ))
                        }
                        <Col md={12} span={24}>
                            <P1><h2>Kids-For-Cash Judges Ordered to Pay More Than $200M</h2>
                                Two former Pennsylvania judges who orchestrated a scheme to send children to for-profit
                                jails in exchange for kickbacks have been ordered to pay more than $200 million to
                                hundreds of people they victimized in one of the worst judicial scandals in U.S.
                                history.
                                <a
                                    rel="noreferrer"
                                    href="https://www.usnews.com/news/politics/articles/2022-08-17/kids-for-cash-judges-ordered-to-pay-more-than-200m"
                                    target={"_blank"}>More >>
                                </a>


                            </P1>
                        </Col>
                    </Row>
                </Space>
            </Container>
        </AriannaNewsWrap>
    );
};

export default HomeExtortion;
