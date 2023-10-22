import React, {Fragment} from 'react';
import AboutMain from "./components/main/index";
import AboutMain2 from "./components/main/index2";
import KidsHero from "./components/hero";
import TopNav from "../../layouts/navs/auth-topnav";
import KidsChart from "./components/chart";
import KidsBanner2 from "../banners/banner2";
import KidsVideos from "./components/videos";
import KidsBanner3 from "../banners/banner3";
import Cash from "./components/cash";
import Banner4 from "../banners/banner4";
import Banner5 from "../banners/banner5";

const AboutPage = () => {
    return (
        <Fragment>
            <TopNav/>
            <Banner4/>
            {/* <KidsChart/> */}
            {/* <KidsHero/> */}
            <AboutMain/>
            <Banner5/>
            <KidsBanner2/>
            <KidsVideos/>
            <KidsBanner3/>
            <AboutMain2/>
            {/* <Cash/> */}
        </Fragment>
    );
};

export default AboutPage;
