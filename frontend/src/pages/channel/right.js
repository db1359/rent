import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Avatar, Card, Button, List, Form, Col, Row, notification, Space} from "antd";
import {CloseOutlined, CopyOutlined, DeleteOutlined, PlusOutlined, ShareAltOutlined} from "@ant-design/icons";
import {groupChannelsApi} from "../../api";
import {createGroupApi, deleteGroupApi, getMyGroupsApi} from "../../api";
import {useNavigate, Link} from "react-router-dom";

const GroupRight = () => {
    const [api, contextHolder] = notification.useNotification();
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [share, setShare] = useState(false);
    const [del, setDel] = useState(false);
    const [title, setTitle] = useState("")
    const [groups, setGroups] = useState([]);
    const [gr, setGr] = useState({});


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
        navigator.clipboard.writeText("https://courtwatch.live/channel/" + gr.slug);
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
                <Row gutter={[12, 12]}>

                <Button
                style={{height: 42, borderRadius: "4px"}}
                onClick={() => {
                    setOpen(true)
                }}
                icon={<PlusOutlined/>}
                type="primary">
                Create Channel
                </Button>

                <List style={{marginTop: 24}}>
                {
                    groups.map((group) => (
                        <List.Item key={group._id}>
                            <List.Item.Meta
                                avatar={
                                    <Link to={`/channel/${group.slug}`}>
                                        {/* <Avatar
                                            size={50}
                                            style={{
                                                backgroundColor: "#8f3dce",
                                                borderRadius: "6px"
                                            }}
                                            shape="square">
                                            {group.title?.[0]}
                                        </Avatar> */}
                                        {<b>{group.title}</b>}
                                    </Link>
                                }
                                // title={<b>{group.title}</b>}
                                description={
                                    <p>
                                        <b>{group.members.length} Members</b>&nbsp;&nbsp;&nbsp;
                                        <span
                                            style={{color: "red"}}>{group.requests.length} Waiting</span>&nbsp;&nbsp;&nbsp;
                                        <span style={{
                                            color: "#8f3dce",
                                            fontWeight: 700
                                        }}>{group.feeds.length} Feeds</span>
                                    </p>
                                }

                            />
                            <Space>
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
            </List>


                    <Col span={24}>
                        <h2 style={{textAlign: "center", color: "red", marginBottom: 0, fontWeight: 700}}>
                        Approval Pending
                        </h2>
                    </Col>
                    {
                        rGroups.map((i) => (
                            <Col span={24} key={`R${i._id}`}>
                                <Space>
                                    <Avatar
                                        onClick={()=>{navigate(`/channel/${i.slug}`)}}
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
                                    <h5 style={{fontSize: 16, margin: 0}}>{i.title}</h5>
                                </Space>
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