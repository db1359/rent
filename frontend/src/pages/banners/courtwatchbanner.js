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
                <h4>CourtWatch</h4>
                <SectionTitle>
                Exposing Fraud & Corruption
                </SectionTitle>
                {/* <h1 style={{paddingTop: 10, paddingBottom: 0}}>Our mission is to Abolish the corrupt, fraudulent, parasitic Family Courts, stop child trafficking and remove money from divorce.</h1> */}
            </Container>
        </KidsHeroWrap>
    );
};

export default KidsHero;
