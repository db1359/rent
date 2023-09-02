import React from 'react';
import VideoPlayer from "../../../../../components/player";
import KidsVideosWrap from "./style/wrap";
import Container from "../../../../../components/paper/container";
import {Col, Row, Space} from "antd";
import P1 from "../../../../../components/paragraph";

const KidsVideos = () => {
    return (
        <KidsVideosWrap>
            <Container>
                <Space
                    direction='vertical'
                    size={32}
                >
                    <Row
                        gutter={[20, 20]}
                    >
                        <Col md={{span: 8}} span={24}>
                            <VideoPlayer url={'https://youtu.be/0DcN6wNKxZA'}/>
                        </Col>
                        <Col md={{span: 8}} span={24}>
                            <VideoPlayer url={'https://youtu.be/xq-JrH5tAnw'}/>
                        </Col>
                        <Col md={{span: 8}} span={24}>
                            <VideoPlayer url={'https://youtu.be/4BFxWLa5qu4'}/>
                        </Col>
                    </Row>
                    <div>
                        <P1>
                            <a href="https://www.youtube.com/watch?v=r0xPzC44GnU">Bad Decisions</a> is a movie about the life of Joe Biden. In 2014 <a href="https://www.theatlantic.com/politics/archive/2014/01/robert-gates-thinks-joe-biden-hasnt-stopped-being-wrong-40-years/356785/">Robert Gates said</a> every decison of Joe Biden in the last 40 years has been wrong. But his worst ones are VAWA and 1994 Crime Bill. They target black families, separating black kids from their parent's, removing black father's from homes, destroying and decimating families with his VAWA and Crime Bill sponsored by the Industrial Prison Complex. Now he is using emergency powers to vaccinate kids on behalf of BIG Pharma. He has done every despicable, vile, inhumane, racist act to profit. In 1994, Joe Biden struck gold with the
                            <a rel="noreferrer" href='https://www.vox.com/policy-and-politics/2019/6/20/18677998/joe-biden-1994-crime-bill-law-mass-incarceration' target='_blank'> 1994 Crime Bill, the largest Crime Bill in US history</a>. More blacks have been locked up under Joe Biden's Crime Bill than All of SLAVERY!
                        </P1>
                        <P1>
                            Joe Biden, was the Industrial Prison Complex's salesman in Washington pushing private prisons. He used his position to write legislation that profited the Industrial Prison Complex. The legislation forcibly locked up innocent people for profit. The legislation was used as a vehicle to transfer tax payer dollars, $12 billion in 1994, to the Industrial Prison Complex. To date as much as $1 Trillion in public taxpayer funds have been transferred.
                        </P1>
                        <P1>
                            Joe Biden's, Crime Bill targeted <b>black males</b> because they are easy targets, easy money for the Industrial Prison Complex, who in turn pay Joe Biden. Here are some of the black men that have had their lives and their childrens' lives destroyed and their families decimated by Joe Biden's 1994 Crime Bill.
                        </P1>
                    </div>
                </Space>
            </Container>
        </KidsVideosWrap>
    );
};

export default KidsVideos;
