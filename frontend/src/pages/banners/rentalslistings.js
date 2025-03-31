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
                <h4>List Rental Property</h4>
                <SectionTitle>
                List & Get Tenants For Your Property
                </SectionTitle>
                <h1 style={{paddingTop: 10, paddingBottom: 0}}>See Listing Terms Below</h1>
            </Container>
        </BannerWrap>
    );
};

export default Banner;
