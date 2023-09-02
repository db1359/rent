import React, {Fragment} from 'react';
import ShareBanner from "../banners/share";
import ShareStory from "./abolishfamilycourt/components/sharestory";
import TopNav from "../../layouts/navs/auth-topnav";

const AboutPage = () => {
    return (
        <Fragment>
            <TopNav/>
            <ShareBanner/>
            <ShareStory/>
        </Fragment>
    );
};

export default AboutPage;