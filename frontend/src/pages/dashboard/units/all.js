import React, {useEffect, useState} from 'react';
import AuthLayout from "../../../layouts/auth.dashboard";
import {Avatar, Button, Form, Input, List, Modal, notification, Space} from "antd";
import {CloseOutlined, CopyOutlined, DeleteOutlined, PlusOutlined, ShareAltOutlined} from "@ant-design/icons";
import GroupRight from "./right";
import GroupLeft from "./left_all";
import {createGroupApi, deleteGroupApi, getMyGroupsApi} from "../../../api";
import {Link} from "react-router-dom";
import CardTitle from "../../../components/heading/card";

const {Item} = Form;

const DashPage = () => {
    
    useEffect(() => {
        
    }, [])

    return (
        <AuthLayout side={<GroupLeft/>}>
             
   <a href="details"><h1>Unit # 105 - Click Me</h1></a>        

        </AuthLayout>
    );
};

export default DashPage;