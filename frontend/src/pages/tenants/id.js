import React, {Fragment} from 'react';
import TopNav from "../../layouts/navs/auth-toptenants";
import BannerID from "../banners/tenantid";
import TenantID from "./components/main/id";

const AboutPage = () => {
    return (
        <Fragment>
            <TopNav/>
            <BannerID/>
            <TenantID/>
        </Fragment>
    );
};

export default AboutPage;
