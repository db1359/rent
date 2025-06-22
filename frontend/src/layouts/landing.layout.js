import React from 'react';
import {Layout} from "antd";
import {Route, Routes} from "react-router-dom";
import LandingLayoutHeader from "./header";
import LandingLayoutFooter from "./footer/";
import AuthDashboard from "./header/auth";
import AuthHeader from "./header/auth";
import AuthFooter from "./footer/auth";
import HomePageFooter from "./footer/home";
import HomePageHeader from "./footer/home";
import HomePage from "../pages/home";
import SignupPage from "../pages/signup";
import LoginPage from "../pages/signin";
import TenantsPage from "../pages/tenants/index";
import CourtWatch from "../pages/tenants/courtwatch";
import EvictionsPage from "../pages/tenants/evictions";
import MaintenancePage from "../pages/tenants/maintenance";
import SuccessPage from "../pages/tenants/success";
import LandlordsPage from "../pages/landlords";
import NotFoundPage from "../pages/404";
import DashboardPage from "../pages/dashboard/";
import UnitsPage from "../pages/dashboard/units/all";
import UnitsDetailsPage from "../pages/dashboard/units/details";
import LeaseDetailsPage from "../pages/dashboard/lease/";
import ProfilePage from "../pages/myprofile";
import MySettings from "../pages/mysettings";
import MyPostPage from "../pages/mypost";
import {useSelector} from "react-redux"
import DonatePage from "../pages/donate";
import IntakePage from "../pages/intake";
import EmailVerificationPage from "../pages/email-verfication";
// import FeedPage from "../pages/feed";
import AboutPage from "../pages/about";
import PrivacyPage from "../pages/about/privacy";
import TermsPage from "../pages/about/terms";
import IDVerify from "../pages/tenants/id";
import ResourcePage from "../pages/resources";
import WebinarPage from "../pages/resources/webinars";
import FormsPage from "../pages/resources/forms";
import RentalsPage from "../pages/rentals";
import RentalsListPage from "../pages/rentals/list";
import RentalsPropertyPage from "../pages/rentals/property";
import ChannelPage from "../pages/mychannel";
import WaitVerifyPage from "../pages/wait-verify";

const {Content} = Layout

const LandingLayout = () => {
    const auth = useSelector((state) => state.auth)
    const home = useSelector((state) => state.home)
    const homefooter = useSelector((state) => state.homefooter)

    return (
        <Layout>
            {
                auth.isAuth ? (
                    <AuthHeader/>
                ) : (
                    <LandingLayoutHeader/>
                    // <AuthDashboard />
                )
            }

            {/* {
                auth.isAuth ? (
                    <AuthHeader />
                ) : (
                home.isHomePage ? (
                    <HomePage />
                ) : (
                    <LandingLayoutHeader />
                )
                )
            } */}

            <Content>
                <Routes>
                    <Route path="/" element={auth?.isAuth ? <MyPostPage/> : <HomePage/>}/>
                    <Route path="/home/" element={<HomePage/>}/>
                    <Route path="/email-verification" element={<EmailVerificationPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/about/privacy" element={<PrivacyPage/>}/>
                    <Route path="/about/terms" element={<TermsPage/>}/>
                    <Route path="/tenants/" element={<TenantsPage/>}/>
                    <Route path="/tenants/courtwatch" element={<CourtWatch/>}/>
                    <Route path="/tenants/evictions" element={<EvictionsPage/>}/>
                    <Route path="/tenants/maintenance" element={<MaintenancePage/>}/>
                    <Route path="/tenants/success" element={<SuccessPage/>}/>
                    <Route path="/tenants/id" element={<IDVerify/>}/>
                    <Route path="/landlords/" element={<LandlordsPage/>}/>
                    <Route path="/signup" element={<SignupPage/>}/>
                    <Route path="/signin" element={<LoginPage/>}/>
                    <Route path="/verify" element={<WaitVerifyPage/>}/>
                    <Route path="/donate" element={<DonatePage/>}/>
                    <Route path="/intake" element={<IntakePage/>}/>
                    <Route path="/resources" element={<ResourcePage/>}/>
                    <Route path="/resources/forms" element={<FormsPage/>}/>
                    <Route path="/resources/webinars" element={<WebinarPage/>}/>
                    <Route path="/rentals" element={<RentalsPage/>}/>
                    <Route path="/rentals/list" element={<RentalsListPage/>}/>
                    <Route path="/rentals/property" element={<RentalsPropertyPage/>}/>
                    <Route path="/:username" element={<ProfilePage/>}/>
                    <Route path="/:username/settings" element={<MySettings/>}/>
                    {/* <Route path="/:username/status/:id" element={<FeedPage/>}/> */}
                    <Route path="/channel" element={<ChannelPage/>}/>
                    <Route path="/dashboard" element={<DashboardPage/>}/>
                    <Route path="/dashboard/units/all" element={<UnitsPage/>}/>
                    <Route path="/dashboard/units/details" element={<UnitsDetailsPage/>}/>
                    <Route path="/dashboard/lease/" element={<LeaseDetailsPage/>}/>
                    <Route path="/*" element={<NotFoundPage/>}/>
                </Routes>
            </Content>
            {
                auth.isAuth ? (
                    <AuthFooter/>
                ) : (
                    <LandingLayoutFooter/>
                )
            }

            {/* {
                auth.isAuth ? (
                    <AuthFooter />
                ) : (
                homefooter.isHomeFooter ? (
                    <HomeFooter />
                ) : (
                    <LandingLayoutFooter />
                )
                )
            } */}
    </Layout>
    );
};
    
export default LandingLayout;