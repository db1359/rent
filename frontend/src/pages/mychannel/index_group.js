import React, {useEffect, useState} from 'react';
import AuthLayout from "../../layouts/auth.layout";
import {Avatar, Button, Form, Input, List, Modal, notification, Space} from "antd";
import {CloseOutlined, CopyOutlined, DeleteOutlined, PlusOutlined, ShareAltOutlined} from "@ant-design/icons";
import GroupRight from "./right";
import {createGroupApi, deleteGroupApi, getMyGroupsApi} from "../../api";
// import {Link} from "react-router-dom";
import {Link, useLocation, useNavigate} from "react-router-dom";
import CardTitle from "../../components/heading/card";
import {groupChannelsApi} from "../../api";
import AuthLeftNavWrap2 from "../../layouts/navs/style/left-wrap2";

const {Item} = Form;

const GroupPage = () => {
    const [api, contextHolder] = notification.useNotification();
    const [form] = Form.useForm();
    const [open, setOpen] = useState(false);
    const [share, setShare] = useState(false);
    const [del, setDel] = useState(false);
    const [title, setTitle] = useState("")
    const [groups, setGroups] = useState([]);
    const [gr, setGr] = useState({});
    const [mGroups, setMGroups] = useState([])
    const [rGroups, setRGroups] = useState([])
    const [myGroups, setMyGroups] = useState([])
    const navigate = useNavigate()
    const location = useLocation();

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

    const getGroups = async () => {
        try {
            const {data} = await groupChannelsApi();
            console.log(data, "CHANNELS")
            setRGroups(data.requests)
            setMGroups(data.members)
            setMyGroups(data.mine)
        } catch (e) {
            console.warn(e)
        }
    }

    useEffect(() => {
        getHandle()
    }, [])

    return (
        <AuthLayout side={<GroupRight/>}>
            <List style={{marginTop: 10,}}>
                <CardTitle style={{paddingBottom: 20,}}>
                Your Channels<br></br>
                </CardTitle>
            </List>  
            
            {/* <Button
                style={{height: 42, borderRadius: "4px"}}
                onClick={() => {
                    setOpen(true)
                }}
                icon={<PlusOutlined/>}
                type="primary">
                Create Channel
            </Button> */}

            <List style={{marginTop: 24}}>
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
                                                borderRadius: "6px"
                                            }}
                                            shape="square">
                                            {group.title?.[0]}
                                        </Avatar>
                                    </Link>
                                }
                                title={<b>{group.title}</b>}
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

            <AuthLeftNavWrap2>
                {
                myGroups.map((i) => (    
                <Button key={i._id}
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/channel/" + i.slug);
                    }}
                    className={location.pathname === "/channel/" + i.slug ? "active" : ""}>
                     {i.slug}
                </Button>
                ))
                }
                {
                mGroups.map((i) => (
                <Button key={i._id}
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/channel/" + i.slug);
                    }}
                    className={location.pathname === "/channel/" + i.slug ? "active" : ""}>
                     {i.slug}
                </Button>
                ))
                }
                {
                rGroups.map((i) => (
                <Button key={i._id}
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/channel/" + i.slug);
                    }}
                    className={location.pathname === "/channel/" + i.slug ? "active" : ""}
                    href={"/channel/" + i.slug}>
                     {i.title}
                </Button> 
                ))
                }
            </AuthLeftNavWrap2>   

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
        </AuthLayout>
    );
};

export default GroupPage;