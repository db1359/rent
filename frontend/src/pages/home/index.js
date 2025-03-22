import React, {useEffect, useState} from 'react';
import HomeWrap from "./style/wrap";
import HomeSlogan from "./style/slogan";
import HomeSlogan2 from "./style/slogan2";
import HomeCounter from "./style/counter";
import HomeSubtitle from "./style/subtitle";
import ChartImage from '../../assets/img/mogul150.png'

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
            <div style={{
                    position: 'relative',
                    paddingTop: '0%',
                }}>
                <img src={ChartImage} alt="Mogul - Ai Rental Service for Tenants & Landlords"/>
            </div>
            {/* <HomeSlogan2>
                MOGUL
            </HomeSlogan2> */}
            {/* <HomeSlogan>
                MOGUL
            </HomeSlogan> */}
            <HomeSubtitle>
                <h1>Ai Rental Service For Tenants & Landlords</h1>
            </HomeSubtitle>
            {/* <HomeSlogan>
                MOGUL
            </HomeSlogan> */}
            {/* <HomeCounter>
                {child.toLocaleString()}
            </HomeCounter> */}
            {/* <HomeSubtitle>
                Children seperated from parents to date.
            </HomeSubtitle> */}
        </HomeWrap>
    );
};

export default HomePage;
