import React, {useEffect, useState} from 'react';
import Container from "../../style/container";
import {Avatar, Button, Card, Checkbox, Col, Form, Input, message, Row, Select, Space, Upload} from "antd";
import {Icon} from "@iconify/react";
import {useSelector} from "react-redux";
import config from "../../config";
import {createRecallApi, directoriesApi} from "../../api";
import {useNavigate} from "react-router-dom";
import {State, City} from "country-state-city";

const {Item} = Form;

const RecallSubmissionPage = () => {
    const auth = useSelector(state => state.auth)

    const navigate = useNavigate();

    const [form] = Form.useForm();

    const [loading, setLoading] = useState(false);

    const [checked, setChecked] = useState(false);

    const [files, setFiles] = useState([]);

    const [directories, setDirectories] = useState([]);

    const [state, setState] = useState("");

    const [, forceUpdate] = useState({});

    const submitHandle = (values) => {
        createRecallApi({
            ...values,
            files: files.map((i) => i.url)
        })
            .then(({data}) => {
                message.success("Successfully submitted the recall.")
                navigate('/recalls')
            })
            .catch((e) => {
                console.log(e)
                message.error("An error created during create the recall. try it again later.")
            })
    }

    const filesChangeHandle = (info) => {
        const {status} = info.file;
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
            setFiles(info.fileList.map((i) => i?.response))
            setLoading(false)
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
            setLoading(false)
        }
    }

    useEffect(() => {
        forceUpdate({});
    }, []);

    useEffect(() => {
        if (!auth?.isAuth) {
            navigate('/login/?redirect=/recalls/submit')
        }
    }, [auth])

    useEffect(() => {
        directoriesApi()
            .then(({data}) => {
                setDirectories(data.map((i) => {
                    i.value = i._id;
                    i.label = i.name;
                    return i
                }))
            })
    }, [])


    return (
        <Container style={{padding: "50px 0"}}>
            <Row>
                <Col span={16} offset={4}>
                    <Card>
                        <Form
                            layout="vertical"
                            form={form}
                            initialValues={{
                                signaturesRequire: 10
                            }}
                            onFinish={submitHandle}
                        >
                            <Row
                                gutter={[12, 12]}
                                align="bottom"
                            >
                                <Col span={8}>
                                    <Item
                                        label="State"
                                        name="state"
                                        rules={[
                                            {
                                                required: true,
                                                message: "State is required",
                                            },
                                        ]}
                                    >
                                        <Select
                                            size="large"
                                            showSearch
                                            optionFilterProp="children"
                                            filterOption={(input, option) =>
                                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                            }
                                            onChange={(e) => {
                                                setState(e)
                                            }}
                                            options={State.getStatesOfCountry('US').map((i) => {
                                                i.label = i.name;
                                                i.value = i.isoCode;
                                                return i
                                            })}
                                        >
                                        </Select>
                                    </Item>
                                </Col>
                                <Col span={8}>
                                    <Item
                                        label="Country"
                                        name="city"
                                        rules={[
                                            {
                                                required: true,
                                                message: "City is required",
                                            },
                                        ]}
                                    >
                                        <Select
                                            size="large"
                                            showSearch
                                            optionFilterProp="children"
                                            filterOption={(input, option) =>
                                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                            }
                                            options={City.getCitiesOfState('US', state).map((i) => {
                                                i.label = i.name;
                                                i.value = i.name;
                                                return i
                                            })}
                                        >
                                        </Select>
                                    </Item>
                                </Col>
                                <Col span={8}>
                                    <Item
                                        label="Party"
                                        name="directory"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Party is required",
                                            },
                                        ]}
                                    >
                                        <Select
                                            size="large"
                                            showSearch
                                            optionFilterProp="children"
                                            filterOption={(input, option) =>
                                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                            }
                                        >
                                            {
                                                directories.filter((i) => i.state === state).map((i) => (
                                                    <Select.Option key={i._id} value={i._id} label={i.name}>
                                                        <Space>
                                                            <Avatar src={i.photo}></Avatar>
                                                            <div>
                                                                {i.name}
                                                            </div>
                                                        </Space>
                                                    </Select.Option>
                                                ))
                                            }
                                        </Select>
                                    </Item>
                                </Col>
                            </Row>
                            <Item
                                label="Page Title"
                                name="title"
                                rules={[
                                    {
                                        required: true,
                                        message: "Title is required",
                                    },
                                ]}
                            >
                                <Input.TextArea
                                    size="large"
                                    style={{minHeight: 80}}
                                />
                            </Item>
                            <Row
                                gutter={[12, 12]}
                                align="bottom"
                            >

                                <Col span={12}>
                                    <Item
                                        label="Signatures Require"
                                        name="signaturesRequire"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Signatures Require is required",
                                            },
                                        ]}
                                    >
                                        <Input
                                            size="large"
                                            type="number"
                                        />
                                    </Item>
                                </Col>
                                <Col span={12}>
                                    <Item
                                        label="Case"
                                        name="case"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Case is required",
                                            },
                                        ]}
                                    >
                                        <Input
                                            size="large"
                                        />
                                    </Item>
                                </Col>
                            </Row>

                            <Item
                                label="Page Content"
                                name="content"
                                rules={[
                                    {
                                        required: true,
                                        message: "Content is required",
                                    },
                                ]}
                            >
                                <Input.TextArea
                                    size="large"
                                    style={{minHeight: 150}}
                                />
                            </Item>
                            <Item
                                label="PDF Files"
                            >
                                <Upload
                                    name="file"
                                    action={config.base_url + "/file/upload"}
                                    onChange={filesChangeHandle}
                                    accept="application/pdf"
                                >
                                    <Button
                                        icon={<Icon icon="bi:file-earmark-pdf"/>}
                                        size="large"
                                        block
                                        style={{padding: "0 32px"}}>
                                        Upload Files
                                    </Button>
                                </Upload>
                            </Item>
                            <Item>
                                <Checkbox
                                    checked={checked}
                                    onChange={(e) => {
                                        setChecked(e.target.checked)
                                    }}
                                >
                                    Receive mobile alerts on behalf of FreeArianna.org. Recurring messages. Msg & data
                                    rates
                                    may apply. Text STOP to 668366 to stop receiving messages. Text HELP to 668366 for
                                    more
                                    information. Privacy
                                </Checkbox>
                            </Item>
                            <Item
                                shouldUpdate
                            >
                                {
                                    () => (
                                        <Button
                                            size="large"
                                            type="primary"
                                            block
                                            htmlType="submit"
                                            disabled={
                                                // !form.isFieldsTouched(true) ||
                                                // !!form.getFieldsError().filter(({errors}) => errors.length).length ||
                                                !checked
                                            }
                                            loading={loading}>
                                            Submit Recall
                                        </Button>
                                    )
                                }
                            </Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default RecallSubmissionPage;
