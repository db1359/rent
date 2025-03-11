import React, {Fragment} from 'react';
import TopNav from "../../layouts/navs/auth-toprentals";
import Listings from "./components/rentalslistings";
import Banner from "../banners/rentalslistings";

const RentalsPage = () => {
    return (
        <Fragment>
            <TopNav/>
            <Banner/>
            <Listings/>
        </Fragment>
    );
};

export default RentalsPage;
