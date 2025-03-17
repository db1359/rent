import React, {Fragment} from 'react';
import AboutMain from "./components/main/maintenance";
import TopNav from "../../layouts/navs/auth-toptenants";
import BannerEvictions from "../banners/tenants";

const AboutPage = () => {
    return (
        <Fragment>
            <TopNav/>
            {/* <BannerEvictions/> */}
            <AboutMain/>
        </Fragment>
    );
};

export default AboutPage;
