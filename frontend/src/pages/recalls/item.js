import React from 'react';
import {Avatar, Button, Card, Col, Progress, Row, Space} from "antd";
import RecallItemWrap from "./style/item-wrap";
import {Icon} from "@iconify/react"
import {useNavigate} from "react-router-dom";

const RecallsItem = (props) => {

    const {recall} = props;

    const navigate = useNavigate();

    return (
        <RecallItemWrap>
            <Row gutter={[32, 32]}>
                <Col span={16}>
                    <Space
                        style={{alignItems: "flex-start"}} size={24}>
                        <Avatar
                            size={160}
                            shape="round"
                            src={recall?.directory?.photo}
                            style={{cursor: "pointer"}}
                            onClick={()=>{navigate(`/recalls/${recall?.directory?.state.toLowerCase()}/${recall?.['_id']}`)}}
                        >
                            {recall?.directory?.name?.[0]}
                        </Avatar>

                        <div>
                            <h3>{recall?.directory?.name}</h3>
                            <p className="recall-info">
                                <span>
                                    <Icon icon="ic:round-my-location"/>
                                    {recall?.directory?.state}, {recall?.directory?.city}
                                </span>
                                <span>
                                    <Icon icon="mdi:license"/>
                                    License #{recall?.directory?.license}
                                </span>
                            </p>
                            <p className="recall-description">
                                {recall?.title?.substring(0, 150)}...
                            </p>
                        </div>
                    </Space>
                </Col>
                <Col span={8}>
                    <Card className="recall-card">
                        <Progress
                            percent={(recall?.signatures?.length || 0)/(recall?.signaturesRequire || 10)*100}
                            steps={10}
                            showInfo={false}
                            strokeWidth={20}
                            strokeColor="#CE3DAF"/>
                        <p className="recall-label">{recall?.signatures?.length || 0} of {recall?.signaturesRequire || 10} signatures</p>
                        <Button
                            block
                            type="primary"
                            className="btn-middle"
                            onClick={()=>{navigate(`/recalls/${recall?.directory?.state.toLowerCase()}/${recall?.directory?.slug}/${recall?.['_id']}`)}}>
                            Sign Petition
                        </Button>
                    </Card>
                </Col>
            </Row>
        </RecallItemWrap>
    );
};

export default RecallsItem;
