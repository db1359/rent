import React, {Fragment} from 'react';
import ShareBanner from "../banners/share";
import ShareStory from "./components/sharestory";
import TopNav from "../../layouts/navs/auth-topco";

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