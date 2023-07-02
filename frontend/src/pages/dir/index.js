import React, {Fragment} from 'react';
// import CommunityNav from "../../layouts/communitynav";
import DirectoryBanner from "../banners/directory";
import Criminals from "./components/criminals";

const ProfitingKidsPage = () => {
    return (
        <Fragment>
            {/* <CommunityNav/> */}
            <DirectoryBanner/>
            <Criminals/>
        </Fragment>
    );
};

export default ProfitingKidsPage;
