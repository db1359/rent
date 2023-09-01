import React, {Fragment} from 'react';
import DirectoryBanner from "../banners/directory";
import TopNav from "../../layouts/navs/auth-topdir";
import Criminals from "./components/criminals";

const ProfitingKidsPage = () => {
    return (
        <Fragment>
            <TopNav/>
            <DirectoryBanner/>
            <Criminals/>
        </Fragment>
    );
};

export default ProfitingKidsPage;
