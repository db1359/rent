import React, {useEffect, useState} from 'react';
import AuthLeftNavWrap from "../../../layouts/navs/style/left-wrap";
import {Avatar, Button} from "antd";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {Icon} from "@iconify/react";

const AuthLeftNav = () => {
    const auth = useSelector(state => state.auth);
    const navigate = useNavigate()
    const location = useLocation();

    const [mGroups, setMGroups] = useState([])
    const [rGroups, setRGroups] = useState([])
    const [myGroups, setMyGroups] = useState([])

    console.log(location)

    return (
        <div>
            <AuthLeftNavWrap>
                <Button 
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/landlord/dashboard/");
                    }}
                    className={location.pathname === "/landlord/dashboard/" && "active"}>
                    <Icon style={{marginRight: 0, fontSize: 35}} icon="iconamoon:home"/> All Units
                </Button>
                <Button 
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("#");
                    }}
                    className={location.pathname === "#" && "active"}>
                    <Icon style={{marginRight: 0, fontSize: 35}} icon="iconamoon:sign-plus-bold"/> Add Unit
                </Button>
                <Button 
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/landlord/dashboard/property/");
                    }}
                    className={location.pathname === "/landlord/dashboard/property/" && "active"}>
                    <Icon style={{marginRight: 0, fontSize: 33}} icon="mdi:office-building-outline"/> Property
                </Button>
            </AuthLeftNavWrap>
        </div>
    );
};

export default AuthLeftNav;