import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Avatar, Card, Col, Row} from "antd";
import {groupChannelsApi} from "../../api";
import {useNavigate} from "react-router-dom";

const GroupRight = () => {

    const navigate = useNavigate();

    const [mGroups, setMGroups] = useState([])
    const [rGroups, setRGroups] = useState([])

    const getGroups = async () => {
        try {
            const {data} = await groupChannelsApi();
            console.log(data, "CHANNELS")
            setRGroups(data.requests)
            setMGroups(data.members)
        } catch (e) {
            console.warn(e)
        }
    }

    useEffect(()=>{
        getGroups()
    },[])

    return (
        <div>
            <GroupRightWrap>
                <Row gutter={[12, 12]}>
                    <Col span={24}>
                        <h2 style={{textAlign: "center", marginBottom: 0, fontWeight: 700}}>Waiting Access</h2>
                    </Col>
                    {
                        rGroups.map((i) => (
                            <Col key={`R${i._id}`}>
                                <Avatar
                                    onClick={()=>{navigate(`/group/${i.slug}`)}}
                                    size={50}
                                    style={{
                                        cursor: "pointer",
                                        backgroundColor: "#8f3dce",
                                        borderRadius: "6px"
                                    }}
                                    src={i.photo}
                                    shape="square">
                                    {i.title?.[0]}
                                </Avatar>
                            </Col>
                        ))
                    }
                </Row>
            </GroupRightWrap>

            <GroupRightWrap>
                <Row gutter={[12, 12]}>
                    <Col span={24}>
                        <h2 style={{textAlign: "center", marginBottom: 0, fontWeight: 700}}>Available Channels</h2>
                    </Col>
                    {
                        mGroups.map((i) => (
                            <Col key={`M${i._id}`}>
                                <Avatar
                                    onClick={()=>{navigate(`/group/${i.slug}`)}}
                                    size={50}
                                    src={i.photo}
                                    style={{
                                        cursor: "pointer",
                                        backgroundColor: "#8f3dce",
                                        borderRadius: "6px"
                                    }}
                                    shape="square">
                                    {i.title?.[0]}
                                </Avatar>
                            </Col>
                        ))
                    }
                </Row>
            </GroupRightWrap>
        </div>
    );
};


const GroupRightWrap = styled(Card)`
  box-shadow: none;
  border: none;
  background: linear-gradient(to top,rgb(240,242,245),rgb(247,234,244));
  border-radius: 12px;
  padding: 0;
  margin-top: 24px;
`

export default GroupRight;