import React, {Fragment} from 'react';
import AboutMain from "./components/main";
import KidsHero from "./components/hero";
import TopNav from "../../layouts/topnav-delete/topnav";

const AboutPage = () => {
    return (
        <Fragment>
            <TopNav/>
            <KidsHero/>
            <AboutMain/>
        </Fragment>
    );
};

export default AboutPage;
