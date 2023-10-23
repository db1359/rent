import React, {Fragment} from 'react';
import BannerStory from "../banners/story";
import AriannaStory from "./components/story";
import AriannaNews from "../channels/components/ariannanews";
import AriannaCriminals from "./components/criminals";
import AriannaExtortion from "./components/extortion";
import AriannaMine from "./components/mine";
import AriannaTable from "./components/table";
import SectionTitle from "../../components/heading/section";

const AriannaStoryPage = () => {
    return (
        <Fragment>
            <BannerStory/>
            <AriannaNews/>
            <AriannaStory/>
            <SectionTitle style={{width: "100%", marginTop: 72, marginBottom: 0}}>Criminals Covering Up Sexual Abuse of Arianna</SectionTitle>
            <AriannaCriminals/>
            <AriannaExtortion/>
            <AriannaMine/>
            <AriannaTable/>
        </Fragment>
    );
};

export default AriannaStoryPage;
