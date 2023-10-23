import React, {Fragment} from 'react';
import AboutMain from "./components/main/index";
import TopNav from "../../layouts/navs/auth-topco";

const AboutPage = () => {
    return (
        <Fragment>
            <TopNav/> 
            <AboutMain/>
        </Fragment>
    );
};

export default AboutPage;
