import React, {Fragment} from 'react';
import CourtWatchBanner from "../banners/evicitioncourtwatch";
import AriannaTable from "./components/table/courtwatch";
import SectionTitle from "../../components/heading/section";
import TopNav from "../../layouts/navs/auth-toptenants";

const CourtWatch = () => {
    return (
        <Fragment>
            <TopNav/>
            <CourtWatchBanner/>
            <AriannaTable/>
        </Fragment>
    );
};

export default CourtWatch;
