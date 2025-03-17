import React, {Fragment} from 'react';
import AboutMain from "./components/main/index";
import TopNav from "../../layouts/navs/auth-toptenants";
import BannerTenants from "../banners/tenants";

const AboutPage = () => {
    return (
        <Fragment>
            <TopNav/>
            <BannerTenants/>
            <AboutMain/>
        </Fragment>
    );
};

export default AboutPage;
