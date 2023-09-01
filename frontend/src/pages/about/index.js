import React, {Fragment} from 'react';
import AboutMain from "./components/main";
import AboutMain2 from "./components/main/index2";
import KidsHero from "./components/hero";
import TopNav from "../../layouts/navs/auth-topco";
import KidsChart from "./components/chart";
import KidsBanner2 from "../banners/banner2";
import KidsVideos from "./components/videos";
import KidsBanner3 from "../banners/banner3";
import Cash from "./components/cash";
import GlitterBanner from "../banners/glitterbanner";
import KidsBanner5 from "../banners/banner5";

const AboutPage = () => {
    return (
        <Fragment>
            <TopNav/>
            {/* <GlitterBanner/> */}
            <AboutMain/>
        </Fragment>
    );
};

export default AboutPage;
