import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Avatar, Button, Card, Grid, Form, List, Input, Col, Row, notification, Modal, Space} from "antd";
import {CloseOutlined, CopyOutlined, DeleteOutlined, PlusOutlined, ShareAltOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {createGroupApi, deleteGroupApi, getMyGroupsApi} from "../../api"
import {Icon} from "@iconify/react";

const GroupRight = () => {

    const {Item} = Form;

    const [api, contextHolder] = notification.useNotification();
    const [form] = Form.useForm();
    const [open, setOpen] = useState(false);
    const [share, setShare] = useState(false);
    const [del, setDel] = useState(false);
    const [title, setTitle] = useState("")
    const [groups, setGroups] = useState([]);
    const [gr, setGr] = useState({});

    const {useBreakpoint} = Grid

    const breakpoints = useBreakpoint()

    const slugify = str =>
        str
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '')
            .replace(/^-+|-+$/g, '');

    const openSuccess = () => {
        api["success"]({
            message: 'Copy Link Success',
            description:
                'The share link was copied to your clipboard.',
        });
    };

    const openDeleteSuccess = () => {
        api["success"]({
            message: 'Channel Deleted',
            description:
                'Channel was deleted successfully!',
        });
    }

    const getHandle = async () => {
        const {data} = await getMyGroupsApi()
        setGroups(data);
    }

    const finishHandle = async (values) => {
        console.log(values)
        try {
            const {data} = await createGroupApi(values);
            console.log(data);
            setOpen(false);
            form.resetFields()
            getHandle()
        } catch (e) {

        }
    }

    const changeHandle = () => {
        if (title !== form.getFieldValue("title")) {
            setTitle(form.getFieldValue("title"));
            form.setFieldValue("slug", slugify(form.getFieldValue("title")))
        }
    }

    const shareOkHandle = () => {
        navigator.clipboard.writeText("https://iboycott.org/channel/" + gr.slug);
        setShare(false);
        openSuccess();
    }

    const deleteHandle = async () => {
        try {
            const {data} = await deleteGroupApi(gr._id);
            if (data.success) {
                setDel(false);
                openDeleteSuccess();
                getHandle();
            }
        } catch (e) {
            console.warn(e)
        }
    }

    useEffect(() => {
        getHandle()
    }, [])

    return (
        <div>
            <GroupRightWrap>
                <Button
                style={{height: 42, borderRadius: "4px"}}
                onClick={() => {
                    setOpen(true)
                }}
                icon={<PlusOutlined/>}
                type="primary">
                Create Channel
                </Button>
                
                <div style={{marginTop: 24, }}>
                    {
                        groups.map((group) => (
                            <List.Item key={group._id}>
                                <List.Item.Meta
                                    avatar={
                                        <Link to={`/channel/${group.slug}`}>
                                            <Avatar
                                                size={50}
                                                style={{
                                                    backgroundColor: "#9701fc",
                                                    borderRadius: "6px",
                                                    marginRight: "10px",
                                                }}
                                                shape="square">
                                                {/* {group.title?.[0]} */}
                                                <Icon style={{marginTop: 10, fontSize: 30}} icon="ic:outline-group"/> 
                                            </Avatar> 
                                             {<b>{group.title}</b>}
                                        </Link>
                                    }
                                    
                                    description={
                                        <p>
                                            <b>{group.members.length} Members</b>&nbsp;&nbsp;&nbsp;
                                            <span
                                                style={{color: "red"}}>{group.requests.length} Waiting</span>&nbsp;&nbsp;&nbsp;
                                            <span style={{
                                                color: "#9701fc",
                                                fontWeight: 700
                                            }}>{group.feeds.length} Feeds</span>
                                        </p>
                                    }

                                />
                                <Space style={{marginBottom: 24,}}>
                                    <Button
                                        onClick={() => {
                                            setShare(true);
                                            setGr(group)
                                        }}
                                        icon={<ShareAltOutlined/>}>
                                        Share
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            setDel(true);
                                            setGr(group)
                                        }}
                                        icon={<DeleteOutlined/>}
                                        danger
                                        type="primary">
                                        Delete
                                    </Button>
                                </Space> 
                            </List.Item>
                        ))
                    }
                </div>
            
                <Modal
                    closeIcon={<CloseOutlined/>}
                    width={600}
                    centered
                    onCancel={() => {
                        setOpen(false)
                    }}
                    title="Create New Channel"
                    footer={false}
                    open={open}>
                    <Form
                        form={form}
                        onFinish={finishHandle}
                        onChange={changeHandle}
                        layout="vertical">
                        <Item
                            name="title"
                            label="Channel Name">
                            <Input
                                size="large"
                                placeholder="Channel Name"
                            />
                        </Item>
                        <Item
                            name="slug"
                            label="Channel Handle">
                            <Input
                                size="large"
                                placeholder="Channel Handle"
                            />
                        </Item>
                        <Item>
                            <Button
                                style={{height: 40}}
                                htmlType="submit"
                                type="primary">
                                Create New Channel
                            </Button>
                        </Item>
                    </Form>
                </Modal>

                <Modal
                    onCancel={() => {
                        setShare(false)
                    }}
                    centered
                    okText="Copy & Close"
                    cancelText="Close"
                    onOk={shareOkHandle}
                    title="Share Channel"
                    open={share}>
                    <Form layout="vertical">
                        <Item label="Share Link">
                            <Input
                                readOnly
                                suffix={
                                    <Button
                                        type="link"
                                        onClick={() => {
                                            navigator.clipboard.writeText("https://iboycott.org/channel/" + gr.slug);
                                            openSuccess()
                                        }}>
                                        <CopyOutlined/>
                                    </Button>
                                }
                                value={"https://iboycott.org/channel/" + gr.slug}
                                size="large"/>
                        </Item>
                    </Form>
                </Modal>

                <Modal
                    centered
                    open={del}
                    okType="primary"
                    okButtonProps={{danger: true}}
                    onOk={deleteHandle}
                    title="Delete Channel"
                    onCancel={() => {
                        setDel(false)
                    }}
                    okText="Yes, Delete"
                    cancelText="Close"
                >
                    <h2><b>Are you sure?</b></h2>
                    <p>
                        If you delete this channel, you can&apos;t recover it in the future. All of your posts will be moved to
                        your own channel.
                    </p>
                </Modal>
                {contextHolder}
            </GroupRightWrap>

            <Card style={{background: 'none', border: 0, alignItems: "center", marginTop: '90px'}}>
                <Row justify="center" gutter={0} style={{justifyContent: "center"}}>  
                    <Col>
                        <Button type="leftcolumnlink">
                            Follow
                        </Button>
                    </Col>
                </Row>
                <Row justify="center" gutter={0} style={{justifyContent: "center"}}>  
                    <Col>
                        <Button
                            target='_blank'
                            href='https://twitter.com/iboycottnow'
                            shape="circle"
                            type="primary"
                            color="pink"
                            size="large"
                            style={{color: "#ffffff", backgroundColor: "#9701fc", marginTop: 10,
                                marginLeft: 0,
                            }}>
                            <Icon icon="mdi:twitter" style={{width: 32, height: 32}}/>
                        </Button>
                    </Col>
                </Row>
            </Card>
            <Card style={{border: 0, background: 'none'}}>
                <Row gutter={20} justify="center" style={{justifyContent: breakpoints.lg ? "flex" : "center", paddingTop: 0}}>
                    <Col>
                        <Link to="/about">About</Link>
                    </Col>
                    <Col>
                        <Link to="/channels/abolishfamilycourt">Channels</Link>
                    </Col>
                    <Col>
                        <Link to="/donate">Donate</Link>
                    </Col>
                    <Col>
                        <Link to="/about/privacy">Privacy</Link>
                    </Col>
                    <Col>
                        <Link to="/about/terms">Terms</Link>
                    </Col>
                </Row>
                <Row gutter={20} justify="center" style={{justifyContent: breakpoints.lg ? "flex" : "center", paddingTop: 0}}>
                    <Col>
                        <Link></Link>
                    </Col>    
                    <Col>
                        Copyright © iBoycott 2024
                    </Col>
                </Row>
            </Card> 
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
  margin-bottom: 34px;
`
export default GroupRight;