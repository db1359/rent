import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Container from "../../style/container";
import {Avatar, Breadcrumb, Button, Card, Checkbox, Col, Form, Input, message, Progress, Row, Select} from "antd";
import RecallSingleWrap from "./stylecriminal/wrap";
import {recallApi, signRecallApi} from "../../api";
import {Icon} from "@iconify/react";
import {State} from "country-state-city";

const {Item} = Form;

const SingleRecallPage = () => {

    const routeParams = useParams();

    const [form] = Form.useForm();

    const navigate = useNavigate();

    const [recall, setRecall] = useState({});

    const [checked, setChecked] = useState(false)

    const finishHandle = (values) => {
        signRecallApi({...values, id: recall?.['_id']})
            .then(({data}) => {
                setRecall(data)
                form.resetFields();
                message.success('Successfully signed your name')
                navigate("/recalls")
            })
            .catch(e => console.log(e))
    }

    useEffect(() => {
        if (!!routeParams.id) {
            recallApi(routeParams.id)
                .then(({data}) => {
                    setRecall(data);
                })
                .catch((e) => {
                    console.log(e)
                })
        }
    }, [routeParams])

    return (
        <RecallSingleWrap>
        {/* <CommunityNav/> */}
            <Container>
                <Row gutter={[40, 24]}>
                    <Col span={24}>
                        <Breadcrumb style={{marginBottom:24}}>

                        <Icon icon="ic:round-home" style={{marginTop: '4px', marginRight: '10px'}}/>

                            <Breadcrumb.Item onClick={()=>{navigate('/recalls')}} style={{color: '#8f3dce'}}><b>Recalls</b></Breadcrumb.Item>
                            {
                                routeParams?.state && (
                                    <Breadcrumb.Item onClick={()=>{navigate(`/recalls/${routeParams.state}`)}} style={{color: '#8f3dce'}}><b>{routeParams.state?.toUpperCase()}</b></Breadcrumb.Item>
                                )
                            }
                            {/* {
                                routeParams?.slug && (
                                    <Breadcrumb.Item onClick={()=>{navigate(`/recalls/${routeParams.state}/${routeParams.slug}`)}}><b>{routeParams.slug}</b></Breadcrumb.Item>
                                )
                            } */}
                            {
                                recall?.directory?.name && (
                                    <Breadcrumb.Item onClick={()=>{navigate(`/${routeParams.slug}`)}} style={{color: '#8f3dce'}}><b>{recall?.directory?.name}</b></Breadcrumb.Item>
                                )
                            }
                        </Breadcrumb>
                        <h1>{recall?.title}</h1>
                    </Col>
                    <Col span={16}>
                        <Row gutter={[32, 24]}>
                            <Col>
                                <Avatar
                                    size={150}
                                    shape="round"
                                    src={recall?.directory?.photo}>
                                    {recall?.directory?.name?.[0]}
                                </Avatar>
                            </Col>
                            <Col>
                                <h3>{recall?.directory?.name}</h3>
                                <h4>{recall?.directory?.['city']}, {recall?.directory?.['state']}</h4>
                                <h4>License #{recall?.directory?.license}</h4>
                            </Col>
                            <Col span={24}>
                                <div
                                    className="content"
                                    dangerouslySetInnerHTML={{__html: recall?.content}}/>
                            </Col>
                            {
                                recall?.files?.map((i, key) => (
                                    <Col span={8} key={`pdf-${key}`}>
                                        <a href={i} className="pdf-link" target="_blank" rel="noreferrer">
                                            <div>
                                                <iframe title={`pdf-${key}`} src={i} width="100%" scrolling="auto"></iframe>
                                            </div>
                                        </a>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                    <Col span={8}>
                        <Card style={{background: "#f0f0f0"}}>
                            <Form
                                layout="vertical"
                                onFinish={finishHandle}
                                form={form}>
                                <Item
                                    style={{textAlign: "Center"}}>
                                    <h2>Sign Petition</h2>
                                    <Progress
                                        percent={(recall?.['signatures']?.length || 0) / (recall?.signaturesRequire || 10) * 100}
                                        steps={10}
                                        showInfo={false}
                                        strokeWidth={20}
                                        strokeColor="#8f3dce"
                                    />
                                    <p className="recall-label">{recall?.['signatures']?.length || 0} of {recall?.signaturesRequire || 10} signatures</p>
                                </Item>
                                <Item
                                    label="First Name"
                                    name="firstname"
                                    rules={[
                                        {
                                            required: true,
                                            message: "First Name is required",
                                        },
                                    ]}>
                                    <Input size="large"/>
                                </Item>
                                <Item
                                    label="Last Name"
                                    name="lastname"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Last Name is required",
                                        },
                                    ]}>
                                    <Input size="large"/>
                                </Item>
                                <Item
                                    label="Email"
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Email is required",
                                        },
                                    ]}>
                                    <Input size="large"/>
                                </Item>
                                <Item
                                    label="Phone Number"
                                    name="phone"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Phone number is required",
                                        },
                                    ]}>
                                    <Input size="large"/>
                                </Item>
                                <Item
                                    label="Address"
                                    name="address"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Address is required",
                                        },
                                    ]}>
                                    <Input size="large"/>
                                </Item>
                                <Item
                                    label="State"
                                    name="state"
                                    rules={[
                                        {
                                            required: true,
                                            message: "State is required",
                                        },
                                    ]}>
                                    <Select
                                        size="large"
                                        showSearch
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                        }
                                        options={State.getStatesOfCountry('US').map((i)=>{i.label = i.name; i.value=i.isoCode; return i})}
                                    >
                                    </Select>
                                </Item>
                                <Item
                                    label="Zip Code"
                                    name="zipcode"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Zip code is required",
                                        },
                                    ]}>
                                    <Input size="large"/>
                                </Item>
                                <Item>
                                    <Checkbox
                                        checked={checked}
                                        onChange={(e)=>{setChecked(e.target.checked)}}>
                                        Receive mobile alerts from CourtWatch. Recurring messages. Msg & data rates
                                        may apply. Text STOP to 668366 to stop receiving messages. Text HELP to 668366
                                        for more information. Privacy
                                    </Checkbox>
                                </Item>
                                <Item shouldUpdate>
                                    <Button
                                        size="large"
                                        block
                                        type="primary"
                                        htmlType="submit"
                                        disabled={!checked}>
                                        Sign
                                    </Button>
                                </Item>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </RecallSingleWrap>
    );
};

export default SingleRecallPage;
