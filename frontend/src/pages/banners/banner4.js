import React from 'react';
import KidsHeroWrap from "./style/pink";
import Container from "../../components/paper/container";
import SectionTitle from "../../components/heading/section";
import P1 from "../../components/paragraph";

const KidsHero = () => {
    return (
        <KidsHeroWrap>
            <Container>
                <P1></P1>
                <h4>DeFund Family Court</h4>
                <SectionTitle>
                Family Courts Generate $100 Billion Annually Destroying Families
                </SectionTitle>
                <h1 style={{paddingTop: 10, paddingBottom: 0}}>Our mission is to defund family court, stop child seperation and remove money from divorce.</h1>
            </Container>
        </KidsHeroWrap>
    );
};

export default KidsHero;
