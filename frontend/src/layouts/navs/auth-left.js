import React, {useEffect, useState} from 'react';
import AuthLeftNavWrap from "./style/left-wrap";
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
                {/* <Button
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/");
                    }}
                    className={location.pathname === "/" && "active"}>
                   Channel
                </Button> */}
                <Button 
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/channel");
                    }}
                    className={location.pathname === "/channel" && "active"}>
                    <Icon style={{marginRight: 5, fontSize: 25}} icon="material-symbols:folder-managed-outline"/> Channels
                </Button>
            </AuthLeftNavWrap>
                <div style={{display: "flex", flexDirection: "column", gap: 15, paddingTop: 15, borderRadius: 12}}>
                    <a
                        type="leftcolumnlink" style={{fontSize: 18, fontWeight: 700}}
                        onClick={() => {
                            navigate("/");
                        }}
                        className={location.pathname === "/" && "active"}>
                        <Avatar
                            size={25}
                            style={{
                                backgroundColor: "#8f3dce",
                                borderRadius: "6px",
                                marginRight: "20"
                            }}
                            shape="square">
                            {auth?.user?.username?.[0]}
                        </Avatar> {auth?.user?.username}
                    </a>
                    {
                    myGroups.map((i) => (
                    <a key={i._id}
                        style={{display: "block", fontSize: 18, fontWeight: 700}}
                        className={location.pathname === "/channel/" + i.slug ? "active" : ""}
                        href={"/channel/" + i.slug}>
                        <Avatar
                            size={25}
                            style={{
                                backgroundColor: "#8f3dce",
                                borderRadius: "6px",
                                marginRight: "20"
                            }}
                            shape="square">
                            {i.title?.[0]}
                        </Avatar> {i.slug}
                    </a>
                    ))
                    }
                    {
                    mGroups.map((i) => (
                    <a key={i._id}
                        style={{display: "block", fontSize: 18, fontWeight: 700}}
                        className={location.pathname === "/channel/" + i.slug ? "active" : ""}
                        href={"/channel/" + i.slug}>
                        <Avatar
                            size={25}
                            style={{
                                backgroundColor: "#8f3dce",
                                borderRadius: "6px",
                                marginRight: "20"
                            }}
                            shape="square">
                            {i.title?.[0]}
                        </Avatar> {i.slug}
                    </a>
                    ))
                    }
                    {
                    rGroups.map((i) => (
                    <a key={i._id}
                        style={{display: "block", fontSize: 18, fontWeight: 700}}
                        className={location.pathname === "/channel/" + i.slug ? "active" : ""}
                        href={"/channel/" + i.slug}>
                        <Avatar
                            size={25}
                            style={{
                                backgroundColor: "#8f3dce",
                                borderRadius: "6px",
                                marginRight: "20"
                            }}
                            shape="square">
                            {i.title?.[0]}
                        </Avatar> {i.title}
                    </a>     
                    ))
                    }
                </div>
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
