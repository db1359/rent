import React from 'react';
import {Button, Form, Input, message, Modal, Space} from "antd";
import {Icon} from "@iconify/react";
import {useDispatch, useSelector} from "react-redux";
import {updateDirectoryApi, updateProfileApi} from "../../../api";
import {updateProfileAction} from "../../../redux/actions/auth";

const { Item } = Form

const DirMainEdit = (props) => {
    const { open, setOpen, dir, getHandle } = props

    const dispatch = useDispatch();

    const updateHandle = (attr) => {
        updateDirectoryApi({_id: dir._id, ...attr})
            .then(({data}) => {
                dispatch(updateProfileAction(data))
                setOpen(false)
                message.success("Successfully updated your profile.")
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <Modal
            open={open}
            onCancel={()=>{setOpen(false)}}
            centered
            closeIcon={<Icon icon="mdi:close"/>}
            title={<h2><b>Edit Profile</b></h2>}
            footer={false}
        >
            <Form
                layout="vertical"
                onFinish={updateHandle}
                initialValues={{
                    slug: dir?.slug,
                    name: dir?.name,
                    license: dir?.license,
                    description: dir?.description,
                }}
            >
                <Item
                    name="slug"
                    label="Username"
                >
                    <Input
                        size="large"
                        placeholder="Username"
                    />
                </Item>

                <Item
                    name="name"
                    label="Full Name"
                >
                    <Input
                        size="large"
                        placeholder="First Name"
                    />
                </Item>

                <Item
                    name="license"
                    label="License"
                >
                    <Input
                        size="large"
                        placeholder="License"
                    />
                </Item>

                <Item
                    name="description"
                    label="Description"
                >
                    <Input.TextArea
                        size="large"
                        placeholder="Description"
                    />
                </Item>
                <Space
                    style={{width: "100%", justifyContent: "flex-end"}}
                    size={16}>
                    <Item>
                        <Button
                            className="btn-middle"
                            onClick={()=>{setOpen(false)}}>
                            Cancel
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            className="btn-middle"
                            type="primary"
                            htmlType="submit">
                            Update
                        </Button>
                    </Item>
                </Space>
            </Form>
        </Modal>
    );
};

export default DirMainEdit;
