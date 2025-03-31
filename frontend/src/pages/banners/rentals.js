import React from 'react';
import BannerWrap from "./style/grey";
import Container from "../../components/paper/container";
import SectionTitle from "../../components/heading/section";
import P1 from "../../components/paragraph";

const Banner = () => {
    return (
        <BannerWrap>
            <Container>
                <P1></P1>
                <h4>Rental Listings</h4>
                <SectionTitle>
                Find Rental Listings In Your Area
                </SectionTitle>
                <h1 style={{paddingTop: 10, paddingBottom: 0}}>Rentals That Fit Your Budget</h1>
            </Container>
        </BannerWrap>
    );
};

export default Banner;
