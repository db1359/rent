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
                <h4>Share Your Story</h4>
                <SectionTitle>
                Expose Court Fraud. Don't Stay Silent.
                </SectionTitle>
                <h1 style={{paddingTop: 10, paddingBottom: 0}}>You are not alone. Over 40 million (US) divorced parents with 24 million young kids are suffering in silence.</h1>
            </Container>
        </KidsHeroWrap>
    );
};

export default KidsHero;