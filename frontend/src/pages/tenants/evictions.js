import React, {Fragment} from 'react';
import AboutMain from "./components/main/evictions";
import TopNav from "../../layouts/navs/auth-toptenants";
import BannerEvictions from "../banners/tenantsevictions";

const AboutPage = () => {
    return (
        <Fragment>
            <TopNav/>
            <BannerEvictions/>
            <AboutMain/>
        </Fragment>
    );
};

export default AboutPage;
