import React, {Fragment} from 'react';
import AboutMainWrap from "./components/main/style/wrap";
import Container from "../../components/paper/container";
import {Card, Col, Row, Space} from "antd";
import CardTitle from "../../components/heading/card";
import P1 from "../../components/paragraph";
import TopNav from "../../layouts/navs/auth-topresources";

const Forms = () => {
    return (
        <Fragment>
            <TopNav/>   
            <AboutMainWrap>
                <Container>
                    <Space direction='vertical' size={32} style={{width: '100%', paddingTop: '30px'}}>
                        <Row gutter={[32, 32]}>
                            <Col lg={{span: 24}} span={24}>
                                <Space direction='vertical' style={{width: '100%'}} size={32}>
                                    <div>
                                        <CardTitle style={{textAlign: 'left'}}>
                                            Court Forms
                                        </CardTitle>
                                        <P1><br></br>                                
Our privacy policy explains how information is collected, used and disclosed by MOGUL with respect to your access and use of MOGUL&apos;s services, whether through our website (located at MOGUL), MOGUL&apos;s mobile application or in connection with social networking services (referred to below as &apos;MOGUL&apos;).
<br></br><br></br>
<h1>What Information Do We Collect</h1>
We collect certain information you provide to us when using MOGUL, such as when you create an account and profile, send us an email or post information or other content to MOGUL. We collect certain personal information, like your name, picture, email address and phone number, as well as certain non-identifying information, like your gender, birthday and zip code. We will also collect the contact information of your friends, if you choose to connect your contacts and address book information with MOGUL and your login credentials to your social network accounts, such as Facebook and Twitter, if you choose to connect those accounts with your MOGUL account. We also automatically collect certain information when you use MOGUL, such as your location/GPS coordinates (if you enable this feature), a device identifier (but not the UDID), MAC address, Internet Protocol (IP) address (if using a browser), operating system, the browser type, the address of a referring site and your activity on MOGUL. You can enable or disable location services when you use MOGUL at anytime, through your mobile device settings.
<br></br><br></br>
<h1>What Information Do We Share With Third Parties</h1>
We will not share the personal information we have collected from you, except as described below: &apos;with your friends on MOGUL with whom you want to share your moments on MOGUL, and according to the preferences set in your account; &apos;with certain social networking services, if you allow such sharing through our services; &apos;with service providers who are working with us in connection with the operation of our site or our services (these service providers have access to your personal information only to perform services on our behalf and are obligated not to disclose it or use it for any other purposes); &apos;we may share aggregated information and non-identifiable information with third parties for industry analysis, demographic profiling and other similar purposes; &apos;when you give us your consent to do so, including if we notify you that the information you provide will be shared in a particular manner and you provide such information; &apos;when we believe in good faith that we are lawfully authorized or required to do so or that doing so is reasonably necessary or appropriate to comply with the law or legal processes or respond to lawful requests or legal authorities, including responding to lawful subpoenas, warrants or court orders; &apos;to enforce or apply our privacy policy, our terms of use or our other policies or agreements; and &apos;in connection with, or during negotiations of, any merger, sale of company assets, financing or acquisition, or in any other situation where personal information may be disclosed or transferred as one of our business assets. We are not responsible for the actions of service providers or other third parties, nor are we responsible for any additional information you provide directly to any third parties.
<br></br><br></br>
<h1>Links to Other Sites</h1>
MOGUL may contain links to other sites. Any information you provide on those sites is provided directly to the owner of that site and is subject to that party&apos;s privacy policy. Our privacy policy does not apply to such sites, and we are not responsible for the content or privacy and security practices and policies of those sites.
<br></br><br></br>
<h1>What Steps Do We Take To Protect Your Information Online</h1>
We take reasonable measures to protect your personal information in an effort to prevent loss, misuse and unauthorized access, disclosure, alteration and destruction. Please be aware, however, that despite our efforts, no security measures are perfect or impenetrable and no method of data transmission can be guaranteed against any interception or other type of misuse.
<br></br><br></br>
<h1>Accessing and Modifying Your Information</h1>
If you have an account, you can access and modify the personal information you provided us that is associated with your account. You may &apos;opt out&apos; of receiving marketing or promotional emails from us by changing your account preferences or by following the instructions in those emails. If you opt out of these messages, you will still receive emails from us, about your account, our services and other pertinent information related to our services. These communications are considered part of the service and your account, which you cannot opt-out from receiving. You can deactivate your account by selecting the &apos;deactivate&apos; link. Deactivating your account lets you remove your profile without permanently deleting it. When you deactivate your account, other users will no longer see your profile or information (but your information is saved, in case you want to reactivate your account at some point in the future). If you want to delete your information and your account, please contact us with a request that we delete your account and information. We will take steps to delete your information as soon as is practicable, but some information may remain in archived/backup copies for our records and as otherwise required by law.
<br></br><br></br>
<h1>Our Policy Toward Children</h1>
Our service is not directed to children under 13 and we do not knowingly collect personal information from children under 13. If we learn that we have collected personal information of a child under 13, we will take steps to delete such information from our files as soon as possible.
<br></br><br></br>
<h1>Changes</h1>
Any information that is collected is subject to the privacy policy in effect at the time such information is collected. We may, however, modify and revise our privacy policy from time-to-time. If we make any material changes to this policy, we will notify you of such changes by posting them on MOGUL or by sending you an email or other notification, and we will indicate when such changes will become effective. By continuing to access or use MOGUL after those changes become effective, you are agreeing to be bound by the revised policy.
                                        </P1>
                                    </div>
                                </Space>
                            </Col>
                        </Row>
                    </Space>
                </Container>
            </AboutMainWrap>
        </Fragment>
    );
};

export default Forms;
