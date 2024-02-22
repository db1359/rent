import React from 'react';
import KidsHeroWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import SectionTitle from "../../../../components/heading/section";
import P1 from "../../../../components/paragraph";

const KidsHero = () => {
    return (
        <KidsHeroWrap>
            <Container>
                <h4>CourtWatch Mission</h4>
                <SectionTitle>
                Our goal is to ABOLISH Family Courts. Family Courts are modern day NAZI camps and families are SLAVES to lawyers, judges and a slew of corrupt frauds who have made it an industry. By abolish family courts we will be saving kids lives, stopping the destruction of families 
                </SectionTitle>
                <h5>
                by corrupt, greedy lawyers, judges, fraudulent child services and a slew of bogus experts profiting by destroying families. 
                </h5>
            </Container>
        </KidsHeroWrap>
    );
};

export default KidsHero;