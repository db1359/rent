import React, {Fragment} from 'react';
import KidsBanner1 from "../banners/banner1";
import KidsBanner2 from "../banners/banner2";
import KidsVideos from "../channels/components/videos";
import KidsBanner3 from "../banners/banner3";
import KidsChart from "../channels/components/chart";
import Cash from "../channels/components/cash";
import KidsCriminal1 from "../channels/components/criminal1";
import KidsCriminal2 from "../channels/components/criminal2";
import KidsCriminal3 from "../channels/components/criminal3";
import KidsCriminal4 from "../channels/components/criminal4";
import KidsCriminal5 from "../channels/components/criminal5";
import KidsCriminal6 from "../channels/components/criminal6";
import KidsCriminal7 from "../channels/components/criminal7";

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
