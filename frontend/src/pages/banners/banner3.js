import React from 'react';
import KidsBannerWrap from "./style/pink";
import Container from "../../components/paper/container";
import SectionTitle from "../../components/heading/section";
import P1 from "../../components/paragraph";
import BlackMenSavedImage from '../../assets/img/blackmensaved.png'

const KidsBanner = () => {
    return (
        <KidsBannerWrap>
            <Container>
                <SectionTitle>
                    <b>Locking up black people is BIG MONEY.</b>
                    <br/>USA out of blacks to LOCKUP, now coming for you & your kids.
                </SectionTitle>
                <P1>
                    <img src={BlackMenSavedImage} alt="Black men lockedup by Joe Biden's Crime Bill and VAWA"/>
                </P1>
            </Container>
        </KidsBannerWrap>
    );
};

export default KidsBanner;