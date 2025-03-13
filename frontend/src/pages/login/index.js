import React, {useState} from 'react';
import Container from "../../style/container";
import {Button, Checkbox, Col, Divider, Form, Input, notification, Row} from "antd";
import AuthWrap from "../../style/auth-wrap";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginAction} from "../../redux/actions/auth";
import {loginApi} from "../../api";

const {Item, useForm} = Form;

const LoginPage = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [searchParams] = useSearchParams()

    const redirect = searchParams.get('redirect')

    const [form] = useForm();

    const [api, contextHolder] = notification.useNotification();

    const [loading, setLoading] = useState(false);

    const openError = (message) => {
        api.error({
            message: `Oops!`,
            description: message,
            placement: "bottomRight",
        });
    };

    const openSuccess = (message) => {
        api.success({
            message: `Success!`,
            description: message,
            placement: "bottomRight",
        });
    };

    const onFinish = (values) => {
        setLoading(true);
        loginApi(values)
            .then(({data}) => {
                const token = data['access_token'];
                const user = data['user'];
                dispatch(loginAction({user, token}))
                openSuccess("Your account was created successfully. Please verify your email address.")
                form.resetFields();
                navigate(redirect ? redirect : "/")
            })
            .catch((e) => {
                openError(e.response.data?.message)
            })
            .finally(() => setLoading(false))
    };

    return (
        <Container>
            <Row>
                <Col span={10} offset={7}>
                {/* <Col span={20} offset={2}> mobile */}
                    <AuthWrap>
                        {contextHolder}
                        <Form
                            layout="vertical"
                            form={form}
                            onFinish={onFinish}>
                            <Item>
                                <h2>
                                    Log in
                                </h2>
                            </Item>
                            <Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        type: "email",
                                        message: "Email is required, and should be an email",
                                    },
                                ]}>
                                <Input size="large" placeholder="Email"/>
                            </Item>
                            <Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: "Enter Password",
                                    },
                                ]}>
                                <Input.Password size="large" placeholder="Password"/>
                            </Item>
                            <Item>
                                <Checkbox>
                                    Remember me
                                </Checkbox>
                            </Item>
                            <Item shouldUpdate>
                                {() => (
                                    <Button
                                        type="primary"
                                        block
                                        htmlType="submit"
                                        loading={loading}
                                        size="large"
                                        disabled={
                                            !form.isFieldsTouched(true) ||
                                            !!form.getFieldsError().filter(({errors}) => errors.length).length}
                                        >
                                        Sign In
                                    </Button>
                                )}
                            </Item>
                            <Divider>
                                Don&apos;t you have an account?
                            </Divider>
                            <Button
                                type="link"
                                block
                                size='large'
                                onClick={() => {
                                    navigate(redirect ? `/signup/?redirect=${redirect}` : "/signup")
                                }}>
                                Register
                            </Button>
                        </Form>
                    </AuthWrap>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginPage;

