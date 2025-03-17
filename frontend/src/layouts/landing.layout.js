import React from 'react';
import {Layout} from "antd";
import {Route, Routes} from "react-router-dom";
import LandingLayoutHeader from "./header";
import LandingLayoutFooter from "./footer";
import AuthHeader from "./header/auth";
import AuthFooter from "./footer/auth";
import HomePage from "../pages/home";
import SignupPage from "../pages/signup";
import LoginPage from "../pages/login";
import TenantsPage from "../pages/tenants/index";
import CourtWatch from "../pages/tenants/courtwatch";
import EvictionsPage from "../pages/tenants/evictions";
import MaintenancePage from "../pages/tenants/maintenance";
import SuccessPage from "../pages/tenants/success";
import LandlordsPage from "../pages/landlords";
import NotFoundPage from "../pages/404";
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
import ResourcePage from "../pages/resources";
import WebinarPage from "../pages/resources/webinars";
import FormsPage from "../pages/resources/forms";
import RentalsPage from "../pages/rentals/listings";
import RentalsListingsPage from "../pages/rentals";
import ChannelPage from "../pages/mychannel";
import WaitVerifyPage from "../pages/wait-verify";

const {Content} = Layout

const LandingLayout = () => {
    const auth = useSelector((state) => state.auth)

    return (
        <Layout>
            {
                auth.isAuth ? (
                    <AuthHeader/>
                ) : (
                    <LandingLayoutHeader/>
                )
            }
            <Content>
                <Routes>
                    <Route path="/" element={auth?.isAuth ? <MyPostPage/> : <HomePage/>}/>
                    <Route path="/email-verification" element={<EmailVerificationPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/about/privacy" element={<PrivacyPage/>}/>
                    <Route path="/about/terms" element={<TermsPage/>}/>
                    <Route path="/tenants/" element={<TenantsPage/>}/>
                    <Route path="/tenants/courtwatch" element={<CourtWatch/>}/>
                    <Route path="/tenants/evictions" element={<EvictionsPage/>}/>
                    <Route path="/tenants/maintenance" element={<MaintenancePage/>}/>
                    <Route path="/tenants/success" element={<SuccessPage/>}/>
                    <Route path="/landlords/" element={<LandlordsPage/>}/>
                    <Route path="/signup" element={<SignupPage/>}/>
                    <Route path="/verify" element={<WaitVerifyPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/donate" element={<DonatePage/>}/>
                    <Route path="/intake" element={<IntakePage/>}/>
                    <Route path="/resources" element={<ResourcePage/>}/>
                    <Route path="/resources/forms" element={<FormsPage/>}/>
                    <Route path="/resources/webinars" element={<WebinarPage/>}/>
                    <Route path="/rentals" element={<RentalsPage/>}/>
                    <Route path="/rentals/listings" element={<RentalsListingsPage/>}/>
                    <Route path="/:username" element={<ProfilePage/>}/>
                    <Route path="/:username/settings" element={<MySettings/>}/>
                    {/* <Route path="/:username/status/:id" element={<FeedPage/>}/> */}
                    <Route path="/channel" element={<ChannelPage/>}/>
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
    </Layout>
    );
};
    
export default LandingLayout;