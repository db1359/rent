import React from 'react';
import HomeMineWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import SectionTitle from "../../../../components/heading/section";
import P1 from "../../../../components/paragraph";
import Image1 from '../../../../assets/img/ariannaforehead.png';
import Image2 from '../../../../assets/img/ariannaoutside.png';
import Image3 from '../../../../assets/img/dayabaranarianna.png';
import Image4 from '../../../../assets/img/dayabaranpoison.png';
import Image5 from '../../../../assets/img/dayabaranabuse.png';

const AriannaMine = () => {
    return (
        <HomeMineWrap>
            <Container>
                <SectionTitle>
                Arianna Abused by Her Mother
                <P1>Arianna's mother locked her outside when she cried, slapped, dropped Arianna on her knees.</P1>
                </SectionTitle>
                <img src={Image2} alt=""/>
                <SectionTitle>
                Arianna Dragged by Her Hair. Beaten with Frying Pan
                <P1>Arianna's mother dragged her by her hair. The nanny hit Arianna on the forehead with a frying pan because the nanny had not patience for the innocent joy of child at play. However the Arianna's mother refused to fire the nanny. I learned later that she protected the nanny because she wanted pay back from the nanny by being a witness in court.</P1>
                </SectionTitle>
                <img src={Image1} alt=""/>
                <SectionTitle>
                    Last Time I Saw Arianna - March 2020
                </SectionTitle>
                <img src={Image3} alt="Daya And Arianna"/>
                <SectionTitle>
                    I Was Poisoned to Prevent The Truth Getting Out
                </SectionTitle>
                <img src={Image4} alt=""/>
                <SectionTitle>
                    I Was an Abused Spouse
                </SectionTitle>
                <img src={Image5} alt=""/>
            </Container>
        </HomeMineWrap>
    );
};

export default AriannaMine;
