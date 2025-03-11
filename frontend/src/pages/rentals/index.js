import React, {Fragment} from 'react';
import TopNav from "../../layouts/navs/auth-toprentals";
import Rentals from "./components/rentals";
import Banner from "../banners/rentals";

const RentalsPage = () => {
    return (
        <Fragment>
            <TopNav/>
            <Banner/>
            <Rentals/>
        </Fragment>
    );
};

export default RentalsPage;
