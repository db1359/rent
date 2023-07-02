import React from 'react';
import {Button, Form, Input, message, Modal, Space} from "antd";
import {Icon} from "@iconify/react";
import {useDispatch, useSelector} from "react-redux";
import {updateProfileApi} from "../../../api";
import {updateProfileAction} from "../../../redux/actions/auth";

const { Item } = Form

const MainEdit = (props) => {
    const { visible, setVisible } = props

    const auth = useSelector(state => state.auth)

    const dispatch = useDispatch();

    const updateHandle = (attr) => {
        updateProfileApi(attr)
            .then(({data}) => {
                dispatch(updateProfileAction(data))
                setVisible(false)
                message.success("Successfully updated your profile.")
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <Modal
            open={visible}
            onCancel={()=>{setVisible(false)}}
            centered
            closeIcon={<Icon icon="mdi:close"/>}
            title={<h2><b>Edit Profile</b></h2>}
            footer={false}
        >
            <Form
                layout="vertical"
                onFinish={updateHandle}
                initialValues={{
                    username: auth?.user?.username,
                    firstname: auth?.user?.firstname,
                    lastname: auth?.user?.lastname,
                    website: auth?.user?.website,
                    description: auth?.user?.description,
                }}
            >
                <Item
                    name="username"
                    label="Username"
                >
                    <Input
                        size="large"
                        placeholder="Username"
                    />
                </Item>

                <Item
                    name="firstname"
                    label="First Name"
                >
                    <Input
                        size="large"
                        placeholder="First Name"
                    />
                </Item>

                <Item
                    name="lastname"
                    label="Last Name"
                >
                    <Input
                        size="large"
                        placeholder="Last Name"
                    />
                </Item>

                <Item
                    name="website"
                    label="Website"
                >
                    <Input
                        size="large"
                        placeholder="Website"
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
                    size={16}
                >
                    <Item>
                        <Button
                            className="btn-middle"
                            onClick={()=>{setVisible(false)}}
                        >
                            Cancel
                        </Button>
                    </Item>
                    <Item>
                        <Button
                            className="btn-middle"
                            type="primary"
                            htmlType="submit"
                        >
                            Update
                        </Button>
                    </Item>
                </Space>
            </Form>
        </Modal>
    );
};

export default MainEdit;
