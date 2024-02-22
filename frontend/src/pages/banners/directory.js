import React from 'react';
import KidsHeroWrap from "./style/grey";
import Container from "../../components/paper/container";
import SectionTitle from "../../components/heading/section";
import P1 from "../../components/paragraph";

const KidsHero = () => {
    return (
        <KidsHeroWrap>
            <Container>
                <P1></P1>
                <h4>Criminals Profiting From</h4>
                <SectionTitle>
                Genocide, War Crimes, Apartheid, Corruption, Fraud, Terrorism
                </SectionTitle>
                <h1 style={{paddingTop: 10, paddingBottom: 0}}>Expose Them</h1>
            </Container>
        </KidsHeroWrap>
    );
};

export default KidsHero;
