import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Avatar, Button, Card, Grid, Form, List, Input, Col, Row, notification, Modal, Space} from "antd";
import {CloseOutlined, CopyOutlined, DeleteOutlined, PlusOutlined, ShareAltOutlined} from "@ant-design/icons";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {createGroupApi, deleteGroupApi, getMyGroupsApi} from "../../../api"
import {Icon} from "@iconify/react";

const GroupLeft = () => {

    const {Item} = Form;

    const navigate = useNavigate()
    const location = useLocation();

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
        navigator.clipboard.writeText("https://EDN/channel/" + gr.slug);
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
            <GroupLeftWrap>
                <Button 
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/channel");
                    }}
                    className={location.pathname === "/channel" && "active"}>
                    <Icon style={{marginRight: 0, fontSize: 40}} icon="iconamoon:file-document"/> Lease Term<br/>
        

                </Button>
                <Button 
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/channel");
                    }}
                    className={location.pathname === "/channel" && "active"}>
                    <Icon style={{marginRight: 0, fontSize: 40}} icon="iconamoon:folder-check"/> 
        
Rent, Deposit & Fees<br/>


                </Button>
                <Button 
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/channel");
                    }}
                    className={location.pathname === "/channel" && "active"}>
                    <Icon style={{marginRight: 0, fontSize: 40}} icon="iconamoon:3d"/> 
        

Options<br/>


                </Button>
                <Button 
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/channel");
                    }}
                    className={location.pathname === "/channel" && "active"}>
                    <Icon style={{marginRight: 0, fontSize: 40}} icon="material-symbols:ink-pen-outline-sharp"/> 
        

Clauses & Rules<br/>


                </Button>
                <Button 
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/channel");
                    }}
                    className={location.pathname === "/channel" && "active"}>
                    <Icon style={{marginRight: 0, fontSize: 40}} icon="material-symbols:folder-open-outline"/> 
        

Disclosures<br/>


                </Button>
                <Button 
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/channel");
                    }}
                    className={location.pathname === "/channel" && "active"}>
                    <Icon style={{marginRight: 0, fontSize: 40}} icon="iconamoon:attachment-fill"/> 
        

Attachments<br/>

                </Button>
                <Button 
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/channel");
                    }}
                    className={location.pathname === "/channel" && "active"}>
                    <Icon style={{marginRight: 0, fontSize: 40}} icon="iconamoon:certificate-badge"/> 
        

Lessor Info<br/>


                </Button>
                <Button 
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/channel");
                    }}
                    className={location.pathname === "/channel" && "active"}>
                    <Icon style={{marginRight: 0, fontSize: 40}} icon="material-symbols:lab-profile-outline"/> 
        


Terms Agreement<br/>


                </Button>
            </GroupLeftWrap>
        </div>
        
    );
};

const GroupLeftWrap = styled(Card)`
  box-shadow: none;
  border: none;
//   background: linear-gradient(to top,rgb(240,242,245),rgb(247,234,244));
  border-radius: 12px;
  padding: 0;
  margin-top: 24px;
  margin-bottom: 34px;
`
export default GroupLeft;