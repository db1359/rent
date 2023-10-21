import React, {useEffect, useState} from 'react';
import AuthLeftNavWrap from "./style/left-wrap";
import AuthLeftNavWrap2 from "./style/left-wrap2";
import {Avatar, Button} from "antd";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {groupChannelsApi} from "../../api";
import {Icon} from "@iconify/react";

const AuthLeftNav = () => {
    const auth = useSelector(state => state.auth);
    const navigate = useNavigate()
    const location = useLocation();

    const [mGroups, setMGroups] = useState([])
    const [rGroups, setRGroups] = useState([])
    const [myGroups, setMyGroups] = useState([])

    const getGroups = async () => {
        try {
            const {data} = await groupChannelsApi();
            console.log(data, "CHANNELS")
            setRGroups(data.requests)
            setMGroups(data.members)
            setMyGroups(data.mine)
        } catch (e) {
            console.warn(e)
        }
    }

    useEffect(()=>{
        getGroups()
    },[])

    console.log(location)

    return (
        <div>
            <AuthLeftNavWrap>
                <Button 
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/");
                    }}
                    className={location.pathname === "/" && "active"}>
                    <Icon style={{marginRight: 5, fontSize: 25}} icon="majesticons:home-line"/> {auth?.user?.username}
                </Button>
                <Button 
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/channel");
                    }}
                    className={location.pathname === "/channel" && "active"}>
                    <Icon style={{marginRight: 5, fontSize: 25}} icon="iconamoon:sign-plus-bold"/> Channels
                </Button>
            </AuthLeftNavWrap>
            <AuthLeftNavWrap2>
                {
                myGroups.map((i) => (    
                <Button key={i._id}
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/channel/" + i.slug);
                    }}
                    className={location.pathname === "/channel/" + i.slug ? "active" : ""}>
                    <Icon style={{marginRight: 5, fontSize: 25}} icon="ic:outline-group"/> {i.slug}
                </Button>
                ))
                }
                {
                mGroups.map((i) => (
                <Button key={i._id}
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/channel/" + i.slug);
                    }}
                    className={location.pathname === "/channel/" + i.slug ? "active" : ""}>
                    <Icon style={{marginRight: 5, fontSize: 25}} icon="ic:outline-group"/> {i.slug}
                </Button>
                ))
                }
                {
                rGroups.map((i) => (
                <Button key={i._id}
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/channel/" + i.slug);
                    }}
                    className={location.pathname === "/channel/" + i.slug ? "active" : ""}
                    href={"/channel/" + i.slug}>
                    <Icon style={{marginRight: 5, fontSize: 25}} icon="ic:outline-group"/> {i.title}
                </Button> 
                ))
                }
            </AuthLeftNavWrap2>       
            <AuthLeftNavWrap>
                <Button
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate(`/${auth?.user?.username}`);
                    }}
                    className={location.pathname === `/${auth?.user?.username}` && "active"}>
                    <Icon style={{marginRight: 5, fontSize: 25}} icon="material-symbols:person-outline"/> Profile
                </Button>
                <Button
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate(`/${auth?.user?.username}/settings`);
                    }}
                    className={location.pathname === `/${auth?.user?.username}/settings` && "active"}>
                    <Icon style={{marginRight: 5, fontSize: 25}} icon="material-symbols:settings-outline"/> Settings
                </Button>
            </AuthLeftNavWrap>
        </div>
    );
};

export default AuthLeftNav;
