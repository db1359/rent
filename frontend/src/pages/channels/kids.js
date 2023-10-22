import React, {Fragment} from 'react';
import KidsBanner1 from "../banners/banner1";
import KidsBanner2 from "../banners/banner2";
import KidsVideos from "./components/videos";
import KidsBanner3 from "../banners/banner3";
import KidsChart from "./components/chart";
import Cash from "./components/cash";
import KidsCriminal1 from "./components/criminal1";
import KidsCriminal2 from "./components/criminal2";
import KidsCriminal3 from "./components/criminal3";
import KidsCriminal4 from "./components/criminal4";
import KidsCriminal5 from "./components/criminal5";
import KidsCriminal6 from "./components/criminal6";
import KidsCriminal7 from "./components/criminal7";
// import CommunityNav from "../../layouts/communitynav/";

const ProfitingKidsPage = () => {
    return (
        <Fragment>
            {/* <CommunityNav/> */}
            <KidsBanner1/>
            <KidsChart/>
            <KidsBanner2/>
            <KidsVideos/>
            <KidsBanner3/>
            <Cash/>
            <KidsCriminal1/>
            <KidsCriminal2/>
            <KidsCriminal3/>
            <KidsCriminal4/>
            <KidsCriminal5/>
            <KidsCriminal6/>
            <KidsCriminal7/>
        </Fragment>
    );
};

export default ProfitingKidsPage;
