import React, {useState, useEffect} from 'react';
import AuthLeftNavWrap from "./style/left-wrap";
import {Button, Grid} from "antd";
import {Link, useLocation, useParams, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {myFeedsApi, userApi} from "../../api";

const AuthLeftNav = () => {
    const auth = useSelector(state => state.auth);
    const navigate = useNavigate()
    const location = useLocation();
    const routeParams = useParams();
    const [user, setUser] = useState({});
    const [settings, setSettings] = useState({});
    const [feeds, setFeeds] = useState([]);
    const {useBreakpoint} = Grid
    const breakpoints = useBreakpoint()

    const getHandle = () => {
        userApi(routeParams.username)
        .then(({data}) => {
        setUser(data)
        console.log(data)
        myFeedsApi(data._id)
        .then(({data}) => {
        setFeeds(data)
        })
        .catch((e) => {
        console.log(e)
        })
        })
        .catch((e) => {
            console.log(e)
        })
    }

    // useEffect(()=>{
    //     getHandle();
    // }, [])

    const isMe = user?.username === auth?.user?.username

    const Settings = user?.username === auth?.user?.username

    return  (
        <AuthLeftNavWrap>
            <Button type="leftcolumnlink"
                    onClick={() => {navigate("/");}}
                    className={location.pathname === "/" && "active"}>
                    Channel
            </Button>
            <Button type="leftcolumnlink"
                    onClick={() => {navigate(`/${auth?.user?.username}`);}}
                    className={location.pathname === `/${auth?.user?.username}` && "active"}>
                    Profile
            </Button>
            <Button type="leftcolumnlink"
                    onClick={() => {navigate(`/${auth?.user?.username}/settings`);}}
                    className={location.pathname === `/${auth?.user?.username}/settings` && "active"}>
                    Settings
            </Button>
            {/* <Link type="leftcolumnlink" to={`/${auth?.user?.username}`}> Profile </Link> */}
        </AuthLeftNavWrap>
    );
};

export default AuthLeftNav;
