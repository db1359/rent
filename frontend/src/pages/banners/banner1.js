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
                <h4>$100 Billion Divorce Industry</h4>
                {/* <SectionTitle>
                    Profiting Off Kids
                </SectionTitle> */}
                <P1>
                    Divorce industry revenues increased 100 fold from $1 billion to $100 billion after Bill Clinton's "Kids for Cash" legistlation to seperates kids from families.
                    It incentivized corrupt judges, attorneys, DAs, therapists and slew of money hungry frauds to massively profit by destroying kids and families. It continues to financially benefit the Clinton campaingn & Foundations to this day.
                </P1>
            </Container>
        </KidsHeroWrap>
    );
};

export default KidsHero;
