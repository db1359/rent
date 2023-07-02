import React, {useEffect, useState} from 'react';
import Container from "../../style/container";
import {Button, Result} from "antd";
import {useNavigate, useSearchParams} from "react-router-dom";
import {confirmEmailApi} from "../../api";

const EmailVerificationPage = () => {
    const navigate = useNavigate();

    const [searchParams] = useSearchParams()

    const [confirmed, setConfirmed] = useState(false);

    const [loading, setLoading] = useState(true)

    const token = searchParams.get('token')

    useEffect(() => {
        if (!!token) {
            confirmEmailApi(token)
                .then(({data})=>{
                    setConfirmed(data.emailVerified)
                })
                .catch((e)=>{
                    console.log(e)
                })
                .finally(()=>{setLoading(false)})
        }
    }, [token])

    return (
        <Container>
            <Result
                status={confirmed ? "success" : "warning"}
                title={loading ? "We are confirming your request..." : "Your email address is successfully confirmed!"}
                subTitle={loading ? "Loading..." : "Thank you."}
                extra={[
                    <Button type="primary" key="home" size="large"
                        onClick={() => {navigate(`/`)}} loading={loading}>
                        Home
                    </Button>,
                    <Button key="email" size="large" loading={loading}>Send Again</Button>,
                ]}
            />
        </Container>
    );
};

export default EmailVerificationPage;
