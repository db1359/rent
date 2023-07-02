import {Button, Checkbox, Form, Input, message, Modal, Select, Upload} from "antd";
import React, {useEffect, useState} from "react";
import {createDirectoryApi} from "../../../../api";
import {Icon} from "@iconify/react";
import config from "../../../../config";
import {City, State} from "country-state-city";

const {Item} = Form;
const {Option} = Select;

const AddDir = (props) => {
    const {getHandle, open, setOpen} = props

    const [form] = Form.useForm();

    const [imgObj, setImgObj] = useState({});

    const [, forceUpdate] = useState({});

    const [loading, setLoading] = useState(false);

    const [checked, setChecked] = useState(false);

    const [state, setState] = useState("");

    const [city, setCity] = useState("");

    const fileChange = (info) => {
        setLoading(true)
        const {status} = info.file;
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
            setImgObj(info.fileList[info.fileList.length - 1].response)
            setLoading(false)
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
            setLoading(false)
        }
    }

    const finishHandle = (values) => {
        createDirectoryApi({
            name: values.name,
            state: values.state,
            city: values.city,
            photo: imgObj.url,
            judge: values.judge,
            license: values.license
        })
            .then(({data}) => {
                getHandle();
                setOpen(false)
                form.resetFields();
                setImgObj({});
                setChecked(false);
                message.success('Successfully added to directory')
            })
            .catch((e) => {
                console.log(e)
            })
    }

    useEffect(() => {
        forceUpdate({});
    }, [])

    const uploadButton = (
        <div>
            {loading ? <Icon icon="line-md:uploading-loop"/> : <Icon icon="material-symbols:add"/>}
            <div style={{marginTop: 8}}>Upload</div>
        </div>
    );

    return (
        <Modal
            open={open}
            centered
            footer={false}
            onCancel={() => {
                setOpen(false)
            }}>
            <Form
                layout="vertical"
                onFinish={finishHandle}
                form={form}>
                <h2><b>Add to Directory</b></h2>
                <Item
                    label="Photo">
                    <Upload
                        name="file"
                        listType="picture-card"
                        accept="image/png,image/jpeg"
                        className="avatar-uploader"
                        showUploadList={false}
                        onChange={fileChange}
                        action={config.base_url + "/file/upload"}
                    >
                        {imgObj?.url ?
                            <img
                                src={imgObj.url}
                                alt="avatar"
                                style={{width: '100%'}}
                            /> :
                            uploadButton
                        }
                    </Upload>
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
                        value={state}
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
                            setState(e)
                        }}/>
                </Item>
                <Item
                    label="County"
                    name="city"
                    rules={[
                        {
                            required: true,
                            message: "County is required",
                        },
                    ]}>
                    <Select
                        placeholder="County - DO NOT SELECT CITY"
                        size="large"
                        showSearch
                        optionFilterProp="children"
                        value={city}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        onChange={(e) => {
                            setCity(e)
                        }}
                        options={City.getCitiesOfState('US', state).map((i) => {
                            i.label = i.name;
                            i.value = i.name;
                            return i
                        })}
                    />
                </Item>
                <Item
                    label="Judge, Lawyer, DA, Therapist etc."
                    name="judge"
                    rules={[
                        {
                            required: true,
                            message: "Judge is required",
                        },
                    ]}>
                    <Select size="large" >
                        <Option value="Judge">Judge</Option>
                        <Option value="Lawyer">Lawyer</Option>
                        <Option value="Police">Police</Option>
                        <Option value="Sheriff">Sheriff</Option>
                        <Option value="DA">DA - District Attorney</Option>
                        <Option value="Therapist">Therapist</Option>
                        <Option value="CPS">CPS Government</Option>
                        <Option value="Child Services">Child Services Private</Option>
                        <Option value="Visitation Provider">Visitation Provider</Option>
                    </Select>
                </Item>
                <Item
                    label="Full Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Name is required",
                        },
                    ]}
                >
                    <Input
                        size="large"
                    />
                </Item>

                <Item
                    label="License or enter 'Don't Know'"
                    name="license"
                    rules={[
                        {
                            required: true,
                            message: "License is required",
                        },
                    ]}
                >
                    <Input
                        size="large"
                    />
                </Item>
                <Item>
                    <Checkbox
                        checked={checked}
                        onChange={(e) => {
                            setChecked(e.target.checked)
                        }}>
                        I confirm this person is not submitted.
                    </Checkbox>
                </Item>
                <Item
                    shouldUpdate
                >
                    {() => (
                        <Button
                            size="large"
                            type="primary"
                            block
                            htmlType="submit"
                            disabled={
                                !form.isFieldsTouched(true) ||
                                !!form.getFieldsError().filter(({errors}) => errors.length).length ||
                                !checked
                            }
                        >
                            Submit
                        </Button>
                    )}
                </Item>
            </Form>
        </Modal>
    )
}

export default AddDir
