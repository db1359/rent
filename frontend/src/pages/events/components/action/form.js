import React, {useState} from 'react';
import ActionFormCard from "./style/form-card";
import {Button, Checkbox, Form, Input, Space} from "antd";

const {Item, useForm} = Form;

const TakeActionForm = () => {
    const [form] = useForm();
    const [loading, setLoading] = useState(false);
    const [checked, setChecked] = useState(false);
    const [success, setSuccess] = useState(false);
    const finishHandler = (data) => {
        setLoading(true)
    }
    return (
        <ActionFormCard>
            {
                !success ? (
                    <Space
                        direction='vertical'
                        size={12}
                        style={{width: '100%'}}
                    >
                        <div>
                            <h2>Post Event</h2>
                            <Form
                                layout='vertical'
                                onFinish={finishHandler}
                                form={form}
                            >
                                <Item
                                    name='firstName'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Firstname is required'
                                        }
                                    ]}
                                >
                                    <Input size='large' placeholder='Event Name'/>
                                </Item>
                                <Item
                                    name='lastName'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Lastname is required'
                                        }
                                    ]}
                                >
                                    <Input size='large' placeholder='Event Date'/>
                                </Item>
                                <Item
                                    name='email'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Email is required'
                                        }
                                    ]}
                                >
                                    <Input size='large' placeholder='Time'/>
                                </Item>
                                <Item
                                    name='zipcode'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Zipcode is required'
                                        }
                                    ]}
                                >
                                    <Input size='large' placeholder='Venue / Online'/>
                                </Item>
                                <Item
                                    name='phone'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Phone number is required'
                                        }
                                    ]}
                                >
                                    <Input size='large' placeholder='Category'/>
                                </Item>
                                <Item>
                                    <Checkbox
                                        onChange={(event) => {setChecked(event.target.checked)}}
                                    >
                                        Receive mobile alerts from VEEV App on behalf of FreeArianna.org. Recurring messages.
                                        Msg & data rates may apply. Text STOP to 668366 to stop receiving messages. Text HELP to
                                        668366 for more information.
                                        &nbsp;<a href="">Privacy</a>
                                    </Checkbox>
                                </Item>
                                <Item>
                                    <Button
                                        type='primary'
                                        size='large'
                                        block
                                        htmlType='submit'
                                        loading={loading}
                                        disabled={!checked}
                                    >
                                        <p style={{textAlign: 'center', color: 'black'}}>Submit</p>
                                    </Button>
                                </Item>
                            </Form>
                        </div>
                    </Space>
                ) :(
                    <div>
                        {/* <SectionTitle>
                            <b>Thank You</b>
                        </SectionTitle> */}
                        {/* <h3>
                            For signing my petition, I will send you periodic updates.
                        </h3> */}
                        {/* <LogoText style={{color: '#8f3dce', marginBottom: 24}}>
                            Love Arianna
                        </LogoText> */}
                        {/* <img src={Banner1} alt="" style={{marginBottom: 32}}/>
                        <Button type='primary' size='large' onClick={()=>{navigate('/donate')}}>
                            DONATE
                        </Button> */}
                    </div>
                )
            }
        </ActionFormCard>
    );
};

export default TakeActionForm;
