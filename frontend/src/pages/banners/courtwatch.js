import React from 'react';
import CourtWatch from "./style/pink";
import Container from "../../components/paper/container";
import SectionTitle from "../../components/heading/section";
import P1 from "../../components/paragraph";

const CourtWatchBanner = () => {
    return (
        <CourtWatch>
            <Container>
                <P1></P1>
                <h4>CourtWatch</h4>
                <SectionTitle>
                Email to: us_courtwatch@proton.me
                </SectionTitle>
                <h1 style={{paddingTop: 10, paddingBottom: 0}}>court watch date, time, party name, court watch link etc</h1>
            </Container>
        </CourtWatch>
    );
};

export default CourtWatchBanner;
