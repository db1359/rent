import React, {useEffect, useState} from 'react';
import {Button, Checkbox, Col, Divider, Form, Input, notification, Row, Select} from "antd";
import {useNavigate, useSearchParams} from "react-router-dom";
import {Icon} from "@iconify/react"
import {useDispatch} from "react-redux";
import Container from "../../style/container";
import AuthWrap from "../../style/auth-wrap";
import {loginAction} from "../../redux/actions/auth";
import {registerApi} from "../../api";
import {openError, openSuccess} from "../../utils/helper/message";

const {Item, useForm} = Form;
const {Option} = Select;

const SignupPage = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [searchParams] = useSearchParams()

    const redirect = searchParams.get('redirect')

    const [form] = useForm();

    const [api, contextHolder] = notification.useNotification();

    const [loading, setLoading] = useState(false);

    const [checked, setChecked] = useState(false);

    const [short, setShort] = useState("+1");

    const [, forceUpdate] = useState({});

    const onFinish = (values) => {
        setLoading(true)
        registerApi({
            ...values,
            phone: `${short} ${values.phone}`
        })
            .then(({data}) => {
                openSuccess(api, "Your account was created successfully. Please verify your email address.")
                form.resetFields();
                navigate("/verify")
            })
            .catch((e) => {
                e.response.data.message && e.response.data?.message?.forEach((i) => {
                    openError(api, i)
                })
            })
            .finally(() => {
                setLoading(false)
            })
    };

    const prefixSelector = (
        <Select
            defaultValue="+1"
            suffixIcon={<Icon icon="mdi:chevron-down"/>}
            onChange={(e) => {
                setShort(e)
            }}
            size="large">
            <Option value="+1">+1</Option>
            {/* <Option value="+44">+44</Option> */}
        </Select>
    );

    useEffect(() => {
        forceUpdate({});
    }, []);

    return (
        <Container>
            {contextHolder}
            <Row>
                <Col span={10} offset={7}>
                    <AuthWrap>
                        <Form
                            layout="vertical"
                            form={form}
                            initialValues={{require: true}}
                            onFinish={onFinish}>
                            <h2>
                                Register
                            </h2>
                            <Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: "User name is required",
                                    },
                                    {
                                        min: 7,
                                        message: "User name should be at least 7 characters",
                                    },
                                ]}>
                                <Input
                                    prefix={<span style={{color: "#aaaaaa"}}>@</span>}
                                    size="large"
                                    placeholder="Username (no spaces)"
                                />
                            </Item>
                            <Item
                                name="firstname"
                                rules={[
                                    {
                                        required: true,
                                        message: "First name is required",
                                    },
                                ]}ƒ>
                                <Input size="large" placeholder="First Name"/>
                            </Item>
                            <Item
                                name="lastname"
                                rules={[
                                    {
                                        required: true,
                                        message: "Last name is required",
                                    },
                                ]}>
                                <Input size="large" placeholder="Last Name"/>
                            </Item>
                            <Item
                                name="phone"
                                rules={[
                                    {
                                    required: true,
                                    type: "regexp",
                                    pattern: new RegExp(/\d+/g),
                                    message: "Phone number is required, and it should be number",
                                    },
                                ]}>
                                <Input
                                    addonBefore={prefixSelector}
                                    size="large"
                                    placeholder="Phone"
                                />
                            </Item>
                            <Item
                                name="email"
                                rules={[
                                    {
                                    required: true,
                                    type: "email",
                                    message: "Email is required, and it should be an email address",
                                    }
                                ]}>
                                <Input size="large" placeholder="Email"/>
                            </Item>
                            <Item
                                name="password"
                                rules={[
                                    {
                                    required: true,
                                    message: "Password is required",
                                    },
                                ]}>
                                <Input.Password size="large" placeholder="Password"/>
                            </Item>
                            <Item>
                                <Checkbox
                                    onChange={event => {
                                        setChecked(event.target.checked);
                                    }}>
                                    I Agree To Terms & Conditions.
                                </Checkbox>
                            </Item>

                            <Item shouldUpdate>
                                {() => (
                                <Button
                                    type="primary"
                                    size="large"
                                    block
                                    htmlType="submit"
                                    loading={loading}
                                    disabled={
                                        !form.isFieldsTouched(true) ||
                                        !!form.getFieldsError().filter(({errors}) => errors.length).length ||
                                        !checked
                                    }>
                                    Sign Up
                                </Button>
                                )}
                            </Item>
                            <Divider>
                                Already have an account?
                            </Divider>
                            <Button
                                block
                                type="link"
                                size="large"
                                onClick={() => {
                                    navigate(redirect ? `/login/?redirect=${redirect}` : "/login")
                                }}>
                                Login
                            </Button>
                        </Form>
                    </AuthWrap>
                </Col>
            </Row>
        </Container>
    );
};

export default SignupPage;
