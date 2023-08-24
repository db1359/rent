import React from 'react';
import AuthLeftNavWrap from "./style/left-wrap";
import {Button} from "antd";
import {useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const AuthLeftNav = () => {
    const auth = useSelector(state => state.auth);
    const navigate = useNavigate()
    const location = useLocation();


    return (
        <AuthLeftNavWrap>
            <Button
                type="leftcolumnlink"
                onClick={() => {
                    navigate("/");
                }}
                className={location.pathname === "/" && "active"}>
                Feed
            </Button>
            <Button
                type="leftcolumnlink"
                onClick={() => {
                    navigate(`/${auth?.user?.username}`);
                }}
                className={location.pathname === `/${auth?.user?.username}` && "active"}>
                Profile
            </Button>
            <Button
                type="leftcolumnlink"
                onClick={() => {
                    navigate(`/${auth?.user?.username}/settings`);
                }}
                className={location.pathname === `/${auth?.user?.username}/settings` && "active"}>
                Settings
            </Button>
            <Button
                type="leftcolumnlink"
                onClick={() => {
                    navigate("/group");
                }}
                className={location.pathname?.includes("/group") && "active"}>
                Channel
            </Button>
        </AuthLeftNavWrap>
    );
};

export default AuthLeftNav;
