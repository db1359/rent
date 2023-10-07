import React, {useEffect, useState} from 'react';
import HomeWrap from "./style/wrap";
import HomeSlogan from "./style/slogan";
import HomeSlogan2 from "./style/slogan2";
import HomeCounter from "./style/counter";
import HomeSubtitle from "./style/subtitle";

const HomePage = () => {

    const [child, setChild] = useState(21024032);

    useEffect(() => {
        const startTime = 1638044206231;
        const interval = setInterval(() => {
            const secFromStart = (Date.now() - startTime) / 1000;
            const numChild = Math.round(secFromStart / 9) + 20000000;
            setChild(numChild);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [])

    return (
        <HomeWrap>
            {/* <HomeSlogan>
                Every 60 seconds a child and parent are separated by Family Courts for profit.
            </HomeSlogan> */}
            <HomeSubtitle>
                <h1>Exposing Family Court Corruption & Fraud</h1>
            </HomeSubtitle>
            <HomeSlogan>
                Every 60 seconds a child & parent are separated for profit.
            </HomeSlogan>
            <HomeCounter>
                {child.toLocaleString()}
            </HomeCounter>
            <HomeSubtitle>
                Children seperated from parents to date.
            </HomeSubtitle>
            {/* <HomeSlogan2>
                ABOLISH Family Courts
            </HomeSlogan2> */}
        </HomeWrap>
    );
};

export default HomePage;
