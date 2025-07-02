import React from 'react';
import {Layout} from "antd";
import {Route, Routes} from "react-router-dom";
import LandingLayoutHeader from "./header/home";
import LandingLayoutFooter from "./footer/";
import AuthDashboard from "./header/auth_new";
import AuthHeader from "./header/auth";
import AuthFooter from "./footer/auth";
import HomeFooter from "./footer/home";
import HomeHeader from "./footer/home";
import HomePage from "../pages/home";
import SignupPage from "../pages/signup";
import LoginPage from "../pages/signin";
import TenantsPage from "../pages/tenants/index";
import TenantsMaintenancePage from "../pages/tenants/maintenance";
import LandlordsPage from "../pages/landlords";
import NotFoundPage from "../pages/404";
import DashboardPage from "../pages/landlord/dashboard/";
import UnitsDetailsPage from "../pages/landlord/dashboard/unit";
import PropertyDetailsPage from "../pages/landlord/dashboard/property";
import LeaseDetailsPage from "../pages/landlord/lease";
import ApplicantsPage from "../pages/landlord/applicants";
import MaintenancePage from "../pages/landlord/maintenance";
import PaymentsPage from "../pages/landlord/payments";
import ProfilePage from "../pages/myprofile";
import MySettings from "../pages/mysettings";
import MyPostPage from "../pages/mypost";
import {useSelector} from "react-redux"
import DonatePage from "../pages/donate";
import EmailVerificationPage from "../pages/email-verfication";
// import FeedPage from "../pages/feed";
import AboutPage from "../pages/about";
import PrivacyPage from "../pages/about/privacy";
import TermsPage from "../pages/about/terms";
import IDVerify from "../pages/tenants/id";
import RentalsPage from "../pages/rentals";
import RentalsListPage from "../pages/rentals/list";
import RentalsPropertyPage from "../pages/rentals/property";
import ChannelPage from "../pages/mychannel";
import WaitVerifyPage from "../pages/wait-verify";

const {Content} = Layout

const LandingLayout = () => {
    const auth = useSelector((state) => state.auth)
    const homeheader = useSelector((state) => state.home)
    const homefooter = useSelector((state) => state.home)

    return (
        <Layout>
            {
                auth.isAuth ? (
                    <AuthHeader/>
                    //<LandingLayoutHeader/>
                ) : (
                    <LandingLayoutHeader/>
                    //<AuthHeader />
                )
            }
            

            {/* {
                auth.isAuth ? (
                    <AuthDashboard />
                ) : (
                homeheader.isHomePage ? (
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
                    <Route path="/tenants/maintenance" element={<TenantsMaintenancePage/>}/>
                    <Route path="/tenants/id" element={<IDVerify/>}/>
                    <Route path="/landlords/" element={<LandlordsPage/>}/>
                    <Route path="/signup" element={<SignupPage/>}/>
                    <Route path="/signin" element={<LoginPage/>}/>
                    <Route path="/verify" element={<WaitVerifyPage/>}/>
                    <Route path="/donate" element={<DonatePage/>}/>
                    <Route path="/rentals" element={<RentalsPage/>}/>
                    <Route path="/rentals/list" element={<RentalsListPage/>}/>
                    <Route path="/rentals/property" element={<RentalsPropertyPage/>}/>
                    <Route path="/:username" element={<ProfilePage/>}/>
                    <Route path="/:username/settings" element={<MySettings/>}/>
                    {/* <Route path="/:username/status/:id" element={<FeedPage/>}/> */}
                    <Route path="/channel" element={<ChannelPage/>}/>
                    <Route path="/landlord/dashboard/" element={<DashboardPage/>}/>
                    <Route path="/landlord/dashboard/unit" element={<UnitsDetailsPage/>}/>
                    <Route path="/landlord/dashboard/property" element={<PropertyDetailsPage/>}/>
                    <Route path="/landlord/lease/" element={<LeaseDetailsPage/>}/>
                    <Route path="/landlord/applicants/" element={<ApplicantsPage/>}/>
                    <Route path="/landlord/maintenance/" element={<MaintenancePage/>}/>
                    <Route path="/landlord/payments/" element={<PaymentsPage/>}/>
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