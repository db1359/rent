import React, {useState} from 'react';
import styled from "styled-components";
import {Avatar, Button, Card, Col, Modal, Row, Space} from "antd";
import {useSelector} from "react-redux";
import {approveRequestGroupApi, removeMemberApi} from "../../api";

const SingleChannelRight = ({group, getHandle}) => {

    const [visible, setVisible] = useState(false);
    const [manage, setManage] = useState(false);
    const [user, setUser] = useState({})
    const authUser = useSelector((state) => state.auth).user

    const approveHandle = async () => {
        try {
            await approveRequestGroupApi({id: group._id, member: user?._id});
            getHandle();
            setVisible(false)
        } catch (e) {
            console.warn(e)
        }
    }

    const removeHandle = async () => {
        try {
            await removeMemberApi({id: group._id, member: user?._id});
            getHandle();
            setManage(false)
        } catch (e) {

        }
    }


    return (
        <div>
            <SingleChannelRightWrap>
                <Row gutter={[12, 12]}>
                    <Col span={24}>
                        <h2 style={{textAlign: "center", marginBottom: 0, fontWeight: 700}}>#{group.slug}</h2>
                        <p style={{textAlign: "center", marginBottom: 0}}>
                            {group.members?.length} Members
                        </p>
                    </Col>
                    {
                        (group.members || [])?.map((member, index) => (
                            <Col  key={`member${member?._id}${index}`}>
                                <Avatar
                                    onClick={()=>{setManage(true); setUser(member)}}
                                    style={{cursor: "pointer", backgroundColor: "#8f3dce"}}
                                    src={member.photo}
                                    size={52}>
                                    {member?.firstname?.[0]}
                                </Avatar>
                            </Col>
                        ))
                    }
                </Row>
            </SingleChannelRightWrap>
            {
                group.author?._id === authUser?.id && <SingleChannelRightWrap>
                    <Row gutter={[12, 12]}>
                        <Col span={24}>
                            <h2 style={{textAlign: "center", color: "red", marginBottom: 0, fontWeight: 700}}>
                                Approval Pending
                            </h2>
                            <p style={{textAlign: "center", marginBottom: 0}}>
                                {group.requests?.length} Members
                            </p>
                        </Col>
                        {
                            (group.requests || [])?.map((member, index) => (
                                <Col key={`requesting${member?._id}${index}`}>
                                    <Avatar
                                        style={{cursor: "pointer", backgroundColor: "#8f3dce"}}
                                        onClick={()=>{
                                            setUser(member);
                                            setVisible(true)
                                        }}
                                        src={member.photo}
                                        size={52}>
                                        {member?.firstname?.[0]}
                                    </Avatar>
                                </Col>
                            ))
                        }
                    </Row>
                </SingleChannelRightWrap>
            }

            <Modal
                onCancel={()=>{setVisible(false)}}
                title="Approve the member request!"
                footer={false}
                centered
                open={visible}>
                <Space
                    size={32}
                    direction="vertical"
                    style={{textAlign: "center", width: "100%", padding: 24}}>
                    <h5 style={{fontSize: 32, marginBottom: 0, fontWeight: 700}}>{user.username}</h5>
                    <Avatar
                        style={{fontSize: 32, backgroundColor: "#8f3dce"}}
                        size={80}
                        src={user?.photo}>
                        {user?.firstname?.[0] || "A"}
                    </Avatar>
                    <Space size={24}>
                        <Button
                            onClick={approveHandle}
                            type="primary">
                            Approve
                        </Button>
                        <Button
                            onClick={()=>{setVisible(false)}}
                            ghost
                            type="primary">
                            Cancel
                        </Button>
                    </Space>
                </Space>
            </Modal>

            <Modal
                onCancel={()=>{setManage(false)}}
                title="Manage Member"
                centered
                footer={false}
                open={manage}>
                <Space
                    size={32}
                    direction="vertical"
                    style={{textAlign: "center", width: "100%", padding: 24}}>
                    <h5 style={{fontSize: 32, marginBottom: 0, fontWeight: 700}}>{user.username}</h5>
                    <Avatar
                        style={{fontSize: 32, backgroundColor: "#8f3dce"}}
                        size={80}
                        src={user?.photo}>
                        {user?.firstname?.[0] || "A"}
                    </Avatar>
                    <Space size={24}>
                        <Button
                            onClick={()=>{removeHandle()}}
                            ghost
                            type="primary">
                            Remove
                        </Button>
                    </Space>
                </Space>
            </Modal>
        </div>
    );
};

const SingleChannelRightWrap = styled(Card)`
  box-shadow: none;
  border: none;
  background: linear-gradient(to top,rgb(240,242,245),rgb(247,234,244));
  border-radius: 12px;
  padding: 0;
  margin-top: 24px;
`

export default SingleChannelRight;