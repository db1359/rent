import React, {useEffect, useState} from 'react';
import AuthLayout from "../../../layouts/auth.dashboard";
import {Avatar, Button, Form, Input, List, Modal, notification, Space, Col, Row} from "antd";
import {CloseOutlined, CopyOutlined, DeleteOutlined, PlusOutlined, ShareAltOutlined} from "@ant-design/icons";
import GroupRight from "./right";
import GroupLeft from "./left";
import {createGroupApi, deleteGroupApi, getMyGroupsApi} from "../../../api";
import {Link} from "react-router-dom";
import CardTitle from "../../../components/heading/card";
import Container from "../../../components/paper/container";
import ChartImage1 from '../../../assets/img/part1.png';
import ChartImage2 from '../../../assets/img/part2.png';

const {Item} = Form;

const DashPage = () => {
    
    useEffect(() => {
        
    }, [])

    return (
        <AuthLayout side={<GroupLeft/>}>
            <Container>
                <Space direction='vertical' size={32} style={{width: '100%', paddingTop: '0px'}}>
                    <Row gutter={[32, 32]}>
                        
                        <Col lg={{span: 32}} span={AuthLayout}>
                            <Space direction='vertical' style={{width: '100%'}} size={32}>
                                <div style={{
                                        position: 'relative',
                                        paddingTop: '0%',
                                    }}>
                                    <img src={ChartImage1} alt=""/>
                                    <img src={ChartImage2} alt=""/>
                                    
                                </div>
                            </Space>
                        </Col>
                        
                    </Row>
                </Space>
            </Container>
        </AuthLayout>
    );
};

export default DashPage;