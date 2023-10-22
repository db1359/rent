import React, {Fragment} from 'react';
import Banner1LAS from "../../banners/banner1Las";
import Main from "../components/las/las";
import TopNav from "../../../layouts/navs/auth-topnav";

const LegalAbuseSyndrome = () => {
    return (
        <Fragment>
            <TopNav/>
            <Banner1LAS/>
            <Main/>
            {/* <AriannaNews/>
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
