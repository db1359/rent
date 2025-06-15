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
            {/* <h4>Setup Your ID Once, Use It Over & Over</h4> */}
            <SectionTitle>
            Manage All Your Expense From One Place
            </SectionTitle>
            {/* <h1 style={{paddingTop: 10, paddingBottom: 0}}>Online Rental Application</h1> */}
        </Container>
    </BannerWrap>
    );
};

export default Banner;
