import React, {useEffect, useState} from 'react';
import {Tabs} from "antd";
import AuthLayout from "../../layouts/auth.layout";
import {useSelector} from "react-redux";
import MainEdit from "./components/main";
import ProfilePhotoEdit from "./components/photo";
import ProfileCoverEdit from "./components/cover";
import {myFeedsApi, userApi} from "../../api";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import AuthRight from "../../layouts/navs/auth-right";
import {getMyDirectoriesApi} from "../../api";

const ProfilePage = () => {
    const auth = useSelector(state => state.auth)

    const routeParams = useParams();

    const navigate = useNavigate();

    const location = useLocation();

    const [dirs, setDirs] = useState([]);

    const [edit, setEdit] = useState(false);

    const [main, setMain] = useState(false);

    const [photo, setPhoto] = useState(false);

    const [cover, setCover] = useState(false);

    const [feeds, setFeeds] = useState([]);

    const [user, setUser] = useState({});

    const getHandle = () => {
        userApi(routeParams.username)
            .then(({data}) => {
                setUser(data)
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

    useEffect(() => {
        getMyDirectoriesApi()
            .then(({data})=>{
                console.log(data)
                setDirs(data)
            })
            .catch((e)=>console.log(e))
    },[])

    useEffect(() => {
        getHandle()
    }, [routeParams])

    useEffect(()=>{
        if(!auth?.isAuth) {
            navigate(`/login/?redirect=${location?.pathname}`)
        }
    },[auth])

    const isMe = user?.username === auth?.user?.username

    const following = user?.['followers']?.filter((i)=>i.id!==auth?.user?.id).length > 0

    console.log(user)

    return user.username ? (
        <AuthLayout side={<AuthRight user={user}/>}>
            <Tabs
                defaultActiveKey="activity"
                type="card"
                style={{marginTop: 24}}
                items={[
                    {
                        label: `Settings`,
                        key: 'activity',
                        children: (<div className="child-area">
                        <p></p>
                        <p></p>
                        <p>Username: @{user?.username}</p>
                        <p>Email:</p>
                        <p>Password:</p>
                        </div>),
                    },
                    {
                        label: `Directory`,
                        key: 'directory-submissions',
                        children: (<div className="child-area">
                        <p></p>
                        <p></p>
                        <p>Your Directory Submissions</p>
                        {
                            dirs.map((i) => (
                                <Link key={i._id} to={`/${i.slug}`} className="child-link">@{i.slug}</Link>
                            ))
                        }
                        </div>),
                    },
                    {
                        label: `Recalls`,
                        key: 'recalls',
                        children: (<div className="child-area">
                        <p></p>
                        <p></p>
                        <p>Your Recalls</p>
                        
                        </div>),
                    },
                    {
                        label: `CourtWatch`,
                        key: 'courtwatch',
                        children: (<div className="child-area">
                        <p></p>
                        <p></p>
                        <p>Work in progess</p>
                        
                        </div>),
                    },
                ]}
            />

            <MainEdit visible={main} setVisible={setMain}/>

            <ProfilePhotoEdit visible={photo} setVisible={setPhoto}/>

            <ProfileCoverEdit visible={cover} setVisible={setCover}/>
        </AuthLayout>
    ) : (
        <></>
    );
};

export default ProfilePage;
