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
                        navigate("/channel");
                    }}
                    className={location.pathname === "/channel" && "active"}>
                    <Icon style={{marginRight: 0, fontSize: 35}} icon="iconamoon:file-document"/> Lease Term<br/>
        

                </Button>
                <Button 
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/channel");
                    }}
                    className={location.pathname === "/channel" && "active"}>
                    <Icon style={{marginRight: 0, fontSize: 35}} icon="iconamoon:folder-check"/> 
        
Rent, Deposit & Fees<br/>


                </Button>
                <Button 
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/channel");
                    }}
                    className={location.pathname === "/channel" && "active"}>
                    <Icon style={{marginRight: 0, fontSize: 35}} icon="iconamoon:3d"/> 
        

Options<br/>


                </Button>
                <Button 
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/channel");
                    }}
                    className={location.pathname === "/channel" && "active"}>
                    <Icon style={{marginRight: 0, fontSize: 35}} icon="material-symbols:ink-pen-outline-sharp"/> 
        

Clauses & Rules<br/>


                </Button>
                <Button 
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/channel");
                    }}
                    className={location.pathname === "/channel" && "active"}>
                    <Icon style={{marginRight: 0, fontSize: 35}} icon="material-symbols:folder-open-outline"/> 
        

Disclosures<br/>


                </Button>
                <Button 
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/channel");
                    }}
                    className={location.pathname === "/channel" && "active"}>
                    <Icon style={{marginRight: 0, fontSize: 35}} icon="iconamoon:attachment-fill"/> 
        

Attachments<br/>

                </Button>
                <Button 
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/channel");
                    }}
                    className={location.pathname === "/channel" && "active"}>
                    <Icon style={{marginRight: 0, fontSize: 35}} icon="iconamoon:certificate-badge"/> 
        

Lessor Info<br/>


                </Button>
                <Button 
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/channel");
                    }}
                    className={location.pathname === "/channel" && "active"}>
                    <Icon style={{marginRight: 0, fontSize: 35}} icon="material-symbols:lab-profile-outline"/> 
        


Terms Agreement<br/>


                </Button>
            </AuthLeftNavWrap>
        </div>
    );
};

export default AuthLeftNav;