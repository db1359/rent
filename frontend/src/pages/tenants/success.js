import React, {Fragment} from 'react';
import AboutMain from "./components/main/success";
import TopNav from "../../layouts/navs/auth-toptenants";
import BannerSuccess from "../banners/evictionsuccess";

const AboutPage = () => {
    return (
        <Fragment>
            <TopNav/>
            <BannerSuccess/>
            <AboutMain/>
        </Fragment>
    );
};

export default AboutPage;
