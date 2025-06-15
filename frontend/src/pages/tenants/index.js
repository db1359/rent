import React, {Fragment} from 'react';
import TopNav from "../../layouts/navs/auth-toptenants";
import BannerHome from "../banners/tenanthome";
import BannerSearch from "../banners/tenantsearch";
import BannerEasyApply from "../banners/tenantapply";
import BannerID from "../banners/tenantid";
import BannerApprove from "../banners/tenantapprove";
import BannerExpense from "../banners/tenantexpense";
import TenantHome from "./components/main/home";
import TenantSearch from "./components/main/search";
import TenantEasyApply from "./components/main/apply";
import TenantID from "./components/main/id";
import TenantApprove from "./components/main/approve";
import TenantExpense from "./components/main/expense";

const AboutPage = () => {
    return (
        <Fragment>
            <TopNav/>
            <p></p>
            <BannerHome/>
            <TenantHome/>

            <BannerSearch/>
            <TenantSearch/>

            <BannerID/>
            <TenantID/>

            <BannerEasyApply/>
            <TenantEasyApply/>

            <BannerApprove/>
            <TenantApprove/>

            <BannerExpense/>
            <TenantExpense/>
        </Fragment>
    );
};

export default AboutPage;
