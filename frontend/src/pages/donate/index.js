import React, {Fragment, useEffect} from 'react';
import Code from '../../assets/img/paypalqrcode.png'
import Container from "../../style/container";
import TopNav from "../../layouts/navs/auth-topabout";

const DonatePage = () => {
    useEffect(() => {
        if(window.PayPal) {
            window.PayPal.Donation.Button({
                env:'production',
                hosted_button_id:'6BM42AQXNXMMW',
                image: {
                    src:'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
                    alt:'Donate with PayPal button',
                    title:'PayPal - The safer, easier way to pay online!',
                }
            }).render('#donate-button');
        }
    }, []);

    return (
        <Fragment>
            <TopNav/> 
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '72px 0',
                flexFlow: 'column',
                gridGap: '72px'
            }}>
                <div id='donate-button'/>

                <img src={Code} alt="" width={300}/>
            </div>
        </Fragment>
    );
};

export default DonatePage;
