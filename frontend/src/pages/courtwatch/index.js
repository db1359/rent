import React, {Fragment} from 'react';
import CourtWatchBanner from "../banners/courtwatch";
import AriannaStory from "../story/components/story";
import AriannaNews from "../story/components/ariannanews";
import AriannaCriminals from "../story/components/criminals";
import AriannaExtortion from "../story/components/extortion";
import AriannaMine from "../story/components/mine";
import AriannaTable from "./components/table/courtwatch";
import SectionTitle from "../../components/heading/section";
import TopNav from "../../layouts/navs/auth-topnav";

const CourtWatch = () => {
    return (
        <Fragment>
            <TopNav/>
            <CourtWatchBanner/>
            {/* <AriannaNews/>
            <AriannaStory/>
            <SectionTitle style={{width: "100%", marginTop: 72, marginBottom: 0}}>Criminals Covering Up Sexual Abuse of Arianna</SectionTitle>
            <AriannaCriminals/>
            <AriannaExtortion/>
            <AriannaMine/> */}
            <AriannaTable/>
        </Fragment>
    );
};

export default CourtWatch;
