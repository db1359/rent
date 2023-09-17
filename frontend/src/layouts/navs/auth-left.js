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
                        navigate("/channel");
                    }}
                    className={location.pathname === "/channel" && "active"}>
                    Channels
                </Button>

            </AuthLeftNavWrap>
                <div style={{display: "flex", flexDirection: "column", gap: 12, paddingTop: 12, borderRadius: 12}}>
                    <Button
                        type="leftcolumnlink" style={{fontSize: 18, fontWeight: 700}}
                        onClick={() => {
                            navigate("/");
                        }}
                        className={location.pathname === "/" && "active"}>
                    #  {auth?.user?.username}
                    </Button>
                    {
                    myGroups.map((i) => (
                    <a key={i._id}
                        style={{display: "block", fontSize: 18, fontWeight: 700}}
                        className={location.pathname === "/channel/" + i.slug ? "active" : ""}
                        href={"/channel/" + i.slug}>
                        #  {i.slug}
                    </a>
                    ))
                    }
                    {
                    mGroups.map((i) => (
                    <a key={i._id}
                        style={{display: "block", fontSize: 18, fontWeight: 700}}
                        className={location.pathname === "/channel/" + i.slug ? "active" : ""}
                        href={"/channel/" + i.slug}>
                        #  {i.slug}
                    </a>
                    ))
                    }
                    {
                    rGroups.map((i) => (
                    <a key={i._id}
                        style={{display: "block", fontSize: 18, fontWeight: 700}}
                        className={location.pathname === "/channel/" + i.title ? "active" : ""}
                        href={"/channel/" + i.title}>
                        #  {i.title}
                    </a>        
                            
                            // <Avatar
                            //             onClick={()=>{navigate(`/channel/${i.slug}`)}}
                                    
                            //             src={i.photo}
                            //             shape="square">
                            //             {i.title?.[0]}
                            //         </Avatar>
                        // <h5 style={{display: "block", fontSize: 18, fontWeight: 700}}>{i.title}</h5>
                                
                        ))
                    }
            </div>
        </div>
    );
};

export default AuthLeftNav;
