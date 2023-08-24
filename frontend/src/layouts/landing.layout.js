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
import LegalAbuseSyndrome from '../pages/legalabusesyndrome';
import NotFoundPage from "../pages/404";
import ProfilePage from "../pages/myprofile";
import MySettings from "../pages/mysettings";
import MyPostPage from "../pages/mypost";
import {useSelector} from "react-redux"
import TrendingPage from "../pages/trending";
import DonatePage from "../pages/donate";
import RecallPage from "../pages/recalls";
import RecallSubmissionPage from "../pages/recalls/submit";
import SingleRecallPage from "../pages/recalls/criminal";
import AriannaStoryPage from "../pages/story";
import ProfitingKidsPage from "../pages/about/kids";
import EmailVerificationPage from "../pages/email-verfication";
import FeedPage from "../pages/feed";
import AboutPage from "../pages/about";
import CourtWatch from "../pages/courtwatch";
import DirectoryPage from "../pages/dir/";
import EventsPage from "../pages/events";
import SharePage from "../pages/about/share";
import PrivacyPage from "../pages/about/privacy";
import TermsPage from "../pages/about/terms";
import GroupPage from "../pages/group";
import SingleGroupPage from "../pages/single-group";
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
                    <Route path="/about/kids" element={<ProfitingKidsPage/>}/>
                    <Route path="/story" element={<AriannaStoryPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/about/share" element={<SharePage/>}/>
                    <Route path="/about/privacy" element={<PrivacyPage/>}/>
                    <Route path="/about/terms" element={<TermsPage/>}/>
                    <Route path="/courtwatch" element={<CourtWatch/>}/>
                    <Route path="/events" element={<EventsPage/>}/>
                    <Route path="/signup" element={<SignupPage/>}/>
                    <Route path="/verify" element={<WaitVerifyPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/legalabusesyndrome" element={<LegalAbuseSyndrome/>}/>
                    <Route path="/donate" element={<DonatePage/>}/>
                    <Route path="/trending" element={<TrendingPage/>}/>
                    <Route path="/recalls" element={<RecallPage/>}/>
                    <Route path="/recalls/submit" element={<RecallSubmissionPage/>}/>
                    <Route path="/recalls/:state" element={<RecallPage/>}/>
                    <Route path="/recalls/:state/:id" element={<SingleRecallPage/>}/>
                    <Route path="/dir" element={<DirectoryPage/>}/>
                    <Route path="/:username" element={<ProfilePage/>}/>
                    <Route path="/:username/settings" element={<MySettings/>}/>
                    <Route path="/:username/status/:id" element={<FeedPage/>}/>
                    <Route path="/group" element={<GroupPage/>}/>
                    <Route path="/group/:slug" element={<SingleGroupPage/>}/>
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