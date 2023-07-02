import React, {Fragment} from 'react'
import TopNav from "../../layouts/topnav-delete/topnav";
import KidsVideos from "./components/videos";

export const CommunityPage = () => {
    return (
        <Fragment>
            <TopNav/>
            <KidsVideos/>
        </Fragment>
    )
}

export default CommunityPage