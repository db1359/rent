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
                <h4>Homeless To Home Owner</h4>
                <SectionTitle>
                CC was evicted, she took the EDN TEP class & within a year she is a home owner.
                </SectionTitle>
                {/* <h1 style={{paddingTop: 10, paddingBottom: 0}}>Our mission is to help tenants stay housed.</h1> */}
            </Container>
        </BannerWrap>
    );
};

export default Banner;
