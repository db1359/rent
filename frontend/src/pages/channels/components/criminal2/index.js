import React, {Fragment} from 'react';
import {Wrap1} from "../criminal1/style/wrap";
import Container from "../../../../components/paper/container";
import Image1 from '../../../../assets/img/bjfadem.jpg'
import {Avatar, Card, Col, Row} from "antd";
import Media from "../../../../components/media";
import P1 from "../../../../components/paragraph";
import CardTitle from "../../../../components/heading/card";

const data = [
    {
        cover: `pdf/bjfadem1.pdf`,
        pdf: `${window.location.origin}/pdf/bjfadem1.pdf`,
        title: 'Rape Charges',
        items: [
            'Rape charges',
        ]
    }, {
        cover: `pdf/nathalieferro2.pdf`,
        pdf: `${window.location.origin}/pdf/nathalieferro2.pdf`,
        title: 'Extortion Charges',
        items: [
            'test',
        ]
    }, {
        cover: `pdf/nathalieferro1.pdf`,
        pdf: `${window.location.origin}/pdf/nathalieferro1.pdf`,
        title: 'Bribery Charges',
        items: [
            'test',
        ]
    }, {
        cover: `pdf/reshmakumar-fraud.pdf`,
        pdf: `${window.location.origin}/pdf/reshmakumar-fraud.pdf`,
        title: 'Sexual Abuse',
        items: [
            'test',
        ]
    }
]

const KidsCriminal2 = () => {

    return (
        <Fragment>
            <Wrap1>
                <Container>
                    <Media>
                        <Avatar src={Image1} size={200}/>
                        <div>
                            <h3>
                            `&quot;BJ`&quot; Fadem
                            </h3>
                            <P1>
                                Cynthia Lie, is in serious and egregious civil rights and color of law violations. Lie

                            </P1>
                        </div>
                    </Media>
                    <P1>
                        On June 13, 2015, I witnessed Ganraj Kumar sexually molest my daughter Arianna, who was 1.5

                    </P1>
                    <P1>
                        Lie is using the courts to get revenge against men, against fathers&quot;, against kids, against

                    </P1>
                </Container>
            </Wrap1>
            <Container style={{marginTop: 21}}>
                <Row
                    gutter={[40, 40]}
                >
                    {
                        data.map((dat, key) => (
                            <Col lg={6} md={12} sm={12} span={24} key={key}>
                                <Card
                                    style={{textAlign: 'center'}}
                                    cover={
                                        <a
                                            rel="noreferrer"
                                            style={{display: 'block', width: '100%'}}
                                            target='_blank'
                                            href={dat.pdf}
                                        >
                                            <embed src={dat.cover} type="application/pdf" height={'300'} width={'100%'} />
                                            {/* <img src={dat.cover} height={300} style={{objectFit: 'cover', width: '100%'}} alt=""/> */}
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
                </Row>
            </Container>
        </Fragment>
    );
};

export default KidsCriminal2;
