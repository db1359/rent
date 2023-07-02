import React, {Fragment, useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import CaseDetailsWrap from "../style/case-wrap";
import {Avatar, Button, Card, Col, Form, Input, message, Row, Select, Space, Switch, Upload} from "antd";
import {useSelector} from "react-redux";
import {Icon} from "@iconify/react";
import uuid from 'react-uuid';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {City, State} from "country-state-city";
import {directoriesApi, updateProfileApi} from "../../../api";
import {updateProfileAction} from "../../../redux/actions/auth";
import config from "../../../config";

const {Item} = Form;
const {Dragger} = Upload;


const CaseDetails = (props) => {
    const {user, getHandle} = props;

    const auth = useSelector(state => state.auth)

    const [form] = Form.useForm();

    const [imgObj, setImgObj] = useState({});

    const [video, setVideo] = useState(user?.story?.media);

    const [type, setType] = useState(user?.story?.mType);

    const [open, setOpen] = useState(false);

    const [directories, setDirectories] = useState([])

    const [judges, setJudges] = useState(user?.story?.judges || []);

    const finishHandle = (values) => {
        updateProfileApi({
            story: {
                title: values.title,
                subtitle: values.subtitle,
                content: values.content,
                media: type === "image" ? (imgObj?.url || user?.story?.media) : video,
                mType: type,
                judges
            }
        })
            .then(({data}) => {
                updateProfileAction(data)
                message.success("Successfully updated your Story.");
                getHandle()
                setOpen(false)
            })
            .catch((e) => {
                console.log(e)
                message.error("An error was created during update your Story. Try again later.")
            })
    }

    const fileChange = (info) => {
        const {status} = info.file;
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
            setImgObj(info.fileList[0].response)
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    }

    useEffect(() => {
        directoriesApi()
            .then(({data}) => {
                setDirectories(data.map((i) => {
                    i.value = i._id;
                    i.label = i.name;
                    return i
                }))
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    const Rex =
        /(\b(https?|ftp|file):\/\/([-A-Z0-9+&@#%?=~_|!:,.;]*)([-A-Z0-9+&@#%?/=~_|!:,.;]*)[-A-Z0-9+&@#/%=~_|])/ig;


    return (
        <CaseDetailsWrap>
            {
                auth?.user?.username === user?.username && !open && (
                    <div style={{textAlign: "center"}}>
                        <Button
                            type="primary"
                            style={{marginBottom: 12}}
                            className="btn-middle"
                            icon={<Icon icon="material-symbols:edit"/>}
                            onClick={() => {
                                setOpen(!open)
                            }}
                        >
                            Edit Story
                        </Button>
                    </div>
                )
            }
            {
                open ? (
                    <Form
                        layout="vertical"
                        onFinish={finishHandle}
                        form={form}
                        initialValues={{
                            title: user?.story?.title,
                            content: user?.story?.content
                        }}
                    >
                        <Item
                            label="Media"
                        >
                            <Switch
                                unCheckedChildren="Video"
                                checkedChildren="Image"
                                checked={type === 'image'}
                                onChange={(e) => {
                                    setType(e ? "image" : "video")
                                }}
                                style={{marginBottom: 8}}
                            />
                            {
                                type === "image" ? (
                                    <Dragger
                                        multiple={false}
                                        accept="image/png,image/jpeg,image/gif"
                                        listType="picture"
                                        action={config.base_url + "/file/upload"}
                                        onChange={fileChange}
                                        showUploadList={false}
                                    >
                                        {
                                            (imgObj?.url || user?.story?.media) && (
                                                <img src={imgObj?.url || user?.story?.media} alt=""/>
                                            )
                                        }
                                    </Dragger>
                                ) : (
                                    <Input
                                        size="large"
                                        placeholder="Video Url from Youtube, Vimeo, Link"
                                        onChange={(e) => {
                                            setVideo(e.target.value)
                                        }}
                                        value={video}
                                    />
                                )
                            }
                        </Item>


                        <Item
                            label="Title"
                            name="title"
                        >
                            <Input size="large"/>
                        </Item>
                        <Item
                            label="Content"
                            name="content"
                        >
                            <Input.TextArea size="large"/>
                        </Item>

                        <Card>
                            {
                                judges.map((judge) => (
                                    <Row
                                        gutter={[4, 0]}
                                        align="middle"
                                        key={judge.uid}
                                    >
                                        <Col span={7}>
                                            <Item
                                                label="State"
                                            >
                                                <Select
                                                    size="large"
                                                    showSearch
                                                    value={judge.state}
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) =>
                                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                                    }
                                                    options={State.getStatesOfCountry('US').map((i) => {
                                                        i.label = i.name;
                                                        i.value = i.isoCode;
                                                        return i
                                                    })}
                                                    onChange={(e) => {
                                                        setJudges([...judges.filter((i) => i.uid !== judge.uid), {
                                                            ...judge,
                                                            state: e
                                                        }])
                                                    }}
                                                />
                                            </Item>
                                        </Col>
                                        <Col span={7}>
                                            <Item
                                                label="Country"
                                            >
                                                <Select
                                                    size="large"
                                                    showSearch
                                                    optionFilterProp="children"
                                                    value={judge.city}
                                                    filterOption={(input, option) =>
                                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                                    }
                                                    onChange={(e) => {
                                                        setJudges([...judges.filter((i) => i.uid !== judge.uid), {
                                                            ...judge,
                                                            city: e
                                                        }])
                                                    }}
                                                    options={City.getCitiesOfState('US', judge.state).map((i) => {
                                                        i.label = i.name;
                                                        i.value = i.name;
                                                        return i
                                                    })}
                                                />
                                            </Item>
                                        </Col>
                                        <Col span={7}>
                                            <Item
                                                label="Judge"
                                            >
                                                <Select
                                                    size="large"
                                                    showSearch
                                                    optionFilterProp="children"
                                                    value={judge.judge}
                                                    onChange={(e) => {
                                                        setJudges([...judges.filter((i) => i.uid !== judge.uid), {
                                                            ...judge,
                                                            judge: e
                                                        }])
                                                    }}
                                                    filterOption={(input, option) =>
                                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                                    }
                                                >
                                                    {
                                                        directories.filter((i) => i.state === judge.state).map((i) => (
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
                                        <Col span={3}>
                                            <Button
                                                shape="circle"
                                                type="link"
                                                onClick={() => {
                                                    setJudges(judges.filter((j) => j.uid !== judge.uid))
                                                }}
                                            >
                                                <Icon icon="material-symbols:close"/> Remove
                                            </Button>
                                        </Col>
                                    </Row>
                                ))
                            }

                            <Item>
                                <Button
                                    type="link"
                                    icon={<Icon icon="material-symbols:add"/>}
                                    onClick={() => {
                                        setJudges([...judges, {uid: uuid()}])
                                    }}
                                >
                                    Add
                                </Button>
                            </Item>
                        </Card>
                        <Row
                            gutter={[12, 12]}
                            style={{justifyContent: "flex-end", marginTop: 24}}
                        >
                            <Col>
                                <Item>
                                    <Button
                                        htmlType="submit"
                                        size="large"
                                        onClick={() => {
                                            setOpen(false);
                                            setJudges(user?.story?.judges);
                                            form.resetFields()
                                        }}
                                    >
                                        Discard Changes
                                    </Button>
                                </Item>
                            </Col>
                            <Col>
                                <Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        size="large"
                                    >
                                        Update Story
                                    </Button>
                                </Item>
                            </Col>
                        </Row>
                    </Form>
                ) : (
                    <Fragment>
                        <h1>{user?.story?.title}</h1>

                        {
                            user?.story?.media && (
                                user?.story?.mType === "image" ? <img src={user?.story?.media} alt="" style={{marginBottom: 24}}/> :
                                    <div className="player-wrap">
                                        <ReactPlayer url={user?.story?.media}/>
                                    </div>
                            )
                        }

                        <p
                            dangerouslySetInnerHTML={{__html: user?.story?.content?.replace(Rex, "<a href='$1' target='_blank'>$3</a>")}}
                            style={{whiteSpace: "pre-wrap"}}
                        />

                        <Row
                            gutter={[24, 12]}
                            style={{marginTop: 24}}
                        >
                            {
                                user?.story?.judges.map((i) => (
                                    <Col span={8} key={`i-${i.judge}`}>
                                        <div
                                            className="person-card"
                                        >
                                            <Avatar
                                                size={120}
                                                src={directories?.filter((j) => j?.['_id'] === i?.judge)?.[0]?.photo}
                                            >
                                                {directories?.filter((j) => j?.['_id'] === i?.judge)?.[0]?.name?.[0]}
                                            </Avatar>
                                            <h3>{directories?.filter((j) => j?.['_id'] === i?.judge)?.[0]?.name}</h3>
                                            <p>
                                                {directories?.filter((j) => j?.['_id'] === i?.judge)?.[0]?.title}
                                            </p>
                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>

                    </Fragment>
                )
            }
        </CaseDetailsWrap>
    );
};

export default CaseDetails;
