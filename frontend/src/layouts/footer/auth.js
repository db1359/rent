import React from 'react';
import Container from "../../style/container";
import {Button, Avatar, Col, Dropdown, Layout, Row, Space} from "antd";
import LogoText from "../../style/logo-text";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {logoutAction} from "../../redux/actions/auth";
import {useDispatch, useSelector} from "react-redux";
import {Icon} from "@iconify/react";

const { Footer } = Layout

const AuthFooter = () => {
    // const navigate = useNavigate()
    // const location = useLocation();
    // const dispatch = useDispatch()
    // const auth = useSelector(state => state.auth)

    // const menuChangeHandle = (e) => {
    //     if(e.key === 'logout') {
    //         dispatch(logoutAction())
    //         navigate('/login')
    //     } else if(e.key==='myprofile') {
    //         navigate(`/${auth?.user?.username}`)
    //     }else {
    //         navigate(`/${e.key}`)
    //     }
    // }

    // const items = [
    //     {
    //         key: 'myprofile',
    //         icon: <Icon style={{fontSize: 18}} icon="mdi:user-outline"/>,
    //         label: <span style={{fontSize: 14, fontWeight: 600}}>My Profile</span>
    //     },
    //     {
    //         type: 'divider',
    //     },
    //     {
    //         key: 'logout',
    //         icon: <Icon style={{fontSize: 16}} icon="icon-park-outline:logout"/>,
    //         label: <span style={{fontSize: 14, fontWeight: 600}}>Logout</span>
    //     }
    // ]

    return (
        <></>
    );
};

// Cloudflare Web Analytics
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "713708b4f8484a3ca1b88a245dc9cea9"}'></script>
// End Cloudflare Web Analytics

export default AuthFooter;
