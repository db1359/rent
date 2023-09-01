import React, {useEffect, useState} from 'react';
import AuthLeftNavWrap from "./style/left-wrap";
import {Button} from "antd";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {groupChannelsApi} from "../../api";

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


    return (
        <div>
            <AuthLeftNavWrap>
                <Button
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/");
                    }}
                    className={location.pathname === "/" && "active"}>
                   Channel
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
                - - - - - - - - - - - - - - - - - - - - 
                <Button 
                    type="leftcolumnlink"
                    onClick={() => {
                        navigate("/channel");
                    }}
                    className={location.pathname?.includes("/channel") && "active"}>
                    Channels
                </Button>

            </AuthLeftNavWrap>
            {/* <div style={{display: "flex", flexDirection: "column", gap: 12, background: "linear-gradient(to top,rgb(240,242,245),rgb(247,234,244))", padding: 16, borderRadius: 12}}> */}
                <div style={{display: "flex", flexDirection: "column", gap: 12, paddingTop: 12, borderRadius: 12}}>

                    {
                        myGroups.map((i) => (
                            <a key={i._id}
                               style={{display: "block", fontSize: 18, fontWeight: 700}}
                               href={"/channel/" + i.slug}>
                                #  {i.slug}
                            </a>
                        ))
                    }
                    {
                    mGroups.map((i) => (
                        <a key={i._id}
                            style={{display: "block", fontSize: 18, fontWeight: 700}}
                            href={"/channel/" + i.slug}>
                            #  {i.slug}
                        </a>
                    ))
                }
            </div>
        </div>
    );
};

export default AuthLeftNav;
