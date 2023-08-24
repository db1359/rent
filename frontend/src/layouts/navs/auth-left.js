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

    const getGroups = async () => {
        try {
            const {data} = await groupChannelsApi();
            console.log(data, "CHANNELS")
            setRGroups(data.requests)
            setMGroups(data.members)
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
                    Channels
                </Button>

            </AuthLeftNavWrap>
            {/* <div style={{display: "flex", flexDirection: "column", gap: 12, background: "linear-gradient(to top,rgb(240,242,245),rgb(247,234,244))", padding: 16, borderRadius: 12}}> */}
                <div>    
                {
                    mGroups.map((i) => (
                        <a key={i._id}
                            style={{display: "block", fontSize: 18, fontWeight: 300}}
                            href={"/group/" + i.slug}>
                            #  {i.slug}
                        </a>
                    ))
                }

            </div>
        </div>
    );
};

export default AuthLeftNav;
