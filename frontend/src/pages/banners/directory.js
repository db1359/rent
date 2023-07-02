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
                <h4>Directory</h4>
                <SectionTitle>
                Corrupt Judges, Lawyers, Therapists, DAs, Public Officals
                </SectionTitle>
                <h1 style={{paddingTop: 10, paddingBottom: 0}}>Add To Directoy & Expose Corrupt Frauds</h1>
            </Container>
        </KidsHeroWrap>
    );
};

export default KidsHero;
