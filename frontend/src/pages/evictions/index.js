import React, {Fragment} from 'react';
import AboutMain from "./components/main/index";
import TopNav from "../../layouts/navs/auth-topevictions";
import Banner4 from "../banners/evictionhome";

const AboutPage = () => {
    return (
        <Fragment>
            <TopNav/>
            <Banner4/>
            {/* <KidsChart/> */}
            {/* <KidsHero/> */}
            <AboutMain/>
            {/* <Banner5/>
            <KidsBanner2/>
            <KidsVideos/>
            <KidsBanner3/>
            <AboutMain2/>
            <Cash/> */}
        </Fragment>
    );
};

export default AboutPage;
