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
                    type="leftcolumnlink">
                    <Icon style={{marginRight: 0, fontSize: 35}} icon="iconamoon:open"/> Unit 105 Details
                </Button>
                <Button 
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/landlord/dashboard/");
                    }}
                    className={location.pathname === "/landlord/dashboard/" && "active"}>
                    <Icon style={{marginRight: 0, fontSize: 35}} icon="iconamoon:arrow-left-2-fill"/> Back
                </Button>
                <Button 
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("#");
                    }}
                    className={location.pathname === "#" && "active"}>
                    <Icon style={{marginRight: 0, fontSize: 35}} icon="material-symbols:tools-wrench-outline"/> Maintenance
                </Button>
                <Button 
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("#");
                    }}
                    className={location.pathname === "#" && "active"}>
                    <Icon style={{marginRight: 0, fontSize: 40}} icon="humbleicons:currency-dollar-circle"/> Payments
                </Button>
            </AuthLeftNavWrap>
        </div>
    );
};

export default AuthLeftNav;