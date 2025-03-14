import React from 'react';
import CourtWatch from "./style/grey";
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
                courtwatch@edn.la
                </SectionTitle>
                <h1 style={{paddingTop: 10, paddingBottom: 0}}>Go To Court & Watch Eviction Cases</h1>
            </Container>
        </CourtWatch>
    );
};

export default CourtWatchBanner;
