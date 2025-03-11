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
                <h4>Are You Being Evicted</h4>
                <SectionTitle>
                We Can Help
                </SectionTitle>
                <h1 style={{paddingTop: 10, paddingBottom: 0}}>Our mission is to help tenants stay housed.</h1>
            </Container>
        </BannerWrap>
    );
};

export default Banner;
