import React, {Fragment} from 'react';
import Banner1 from "./components/banner1";
import AriannaStory from "./components/story";
import AriannaNews from "./components/ariannanews";
import AriannaCriminals from "./components/criminals";
import AriannaExtortion from "./components/extortion";
import AriannaMine from "./components/mine";
import AriannaTable from "./components/table";
import SectionTitle from "../../../components/heading/section";
import TopNav from "../../../layouts/navs/auth-topnav";

const LegalAbuseSyndrome = () => {
    return (
        <Fragment>
            <TopNav/>
            <h2>Coming</h2>
            {/* <Banner1/>
            <AriannaNews/>
            <AriannaStory/>
            <SectionTitle style={{width: "100%", marginTop: 72, marginBottom: 0}}>Criminals Covering Up Sexual Abuse of Arianna</SectionTitle>
            <AriannaCriminals/>
            <AriannaExtortion/>
            <AriannaMine/>
            <AriannaTable/> */}
        </Fragment>
    );
};

export default LegalAbuseSyndrome;
