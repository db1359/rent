import React from 'react';
import HomeTableWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
// import Container from "../../../../style/container";
import SectionTitle from "../../../../components/heading/section";
import TableContent from "./style/table2";
import {Icon} from '@iconify/react';
import {Button, Col, Grid, Layout, Row} from "antd";

const AriannaTable = () => {
    return (
        <HomeTableWrap>
            <Container>
                <TableContent>
                    <div>
                        <div>
                            <div><b>Date</b></div>
                        </div>
                        <div>
                            <div><b>Time</b></div>
                        </div>
                        <div>
                            <div><b>Name</b></div>
                        </div>
                        <div>
                            <div><b>Department</b></div>
                        </div>
                        <div>
                            <div><b>Court Watch Link</b></div>
                        </div>
                        <div>
                            <div><b>Donate To</b></div>
                        </div>
                        <div>
                            <div style={{textAlign: 'center'}}><b>Tweet</b></div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>10/25/2023</div>
                        </div>
                        <div>
                            <div>1:30 PM</div>
                        </div>
                        <div>
                            <div>Daya Baran</div>
                        </div>
                        <div>
                            <div>Dep 64</div>
                        </div>
                        <div>
                            <div><a href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_YThiMjc1NmYtY2Q1OS00OWU4LTgzNzYtNTY0ZjI5MzQ4M2Iy%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%2522c0a96a14-a905-4caa-8c29-a227571a29a2%2522%252c%2522Oid%2522%253a%25225a51b742-5dd8-4523-b89c-b69845eb07d9%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=eabd5c08-84b2-474b-aa76-53c542e5316e&directDl=true&msLaunch=true&enableMobilePage=false&suppressPrompt=true"
                            target="_blank" rel="noreferrer">
                            Court Watch Link</a></div>
                        </div>
                        <div>
                            <div><a href="https://iboycott.org/" target="_blank" rel="noreferrer"></a></div>
                        </div>
                        <div>
                            <div style={{textAlign: 'center'}}>
                                <a href="https://twitter.com/intent/tweet?text=Court%20Watch%20for%20FreeArianna%20https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_NGFiNzZjYTktMTIxYi00YjVkLTg4ZTMtYmNiZTlhMGFjMjhk%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%2522c0a96a14-a905-4caa-8c29-a227571a29a2%2522%252c%2522Oid%2522%253a%25225a51b742-5dd8-4523-b89c-b69845eb07d9%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=e6be0d23-004e-4d8a-95b4-42c0d3dccc17&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true" target="_blank" rel="noreferrer">
                                <Icon icon="mdi:twitter" style={{width: 30, height: 30}}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>05/23/2023</div>
                        </div>
                        <div>
                            <div>1:30 PM</div>
                        </div>
                        <div>
                            <div>Ella Taran</div>
                        </div>
                        <div>
                            <div>Dep 79</div>
                        </div>
                        <div>
                            <div><a href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_OGU1NWMwNmQtZTNhMC00ZjMyLWI1YmUtNzY1YmUyZjYyN2Q2%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%2522c0a96a14-a905-4caa-8c29-a227571a29a2%2522%252c%2522Oid%2522%253a%2522b89c460a-6578-4101-82c1-38fb2849a293%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=e97800c9-7137-40c4-b4bd-e73a8e0e94fc&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true"
                            target="_blank" rel="noreferrer">
                            Court Watch Link</a></div>
                        </div>
                        <div>
                            <div><a href="https://iboycott.org/" target="_blank" rel="noreferrer"></a></div>
                        </div>
                        <div>
                            <div style={{textAlign: 'center'}}>
                                <a href="https://twitter.com/intent/tweet?text=Court%20Watch%20for%20Ella%20Taran%20https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_NGFiNzZjYTktMTIxYi00YjVkLTg4ZTMtYmNiZTlhMGFjMjhk%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%2522c0a96a14-a905-4caa-8c29-a227571a29a2%2522%252c%2522Oid%2522%253a%25225a51b742-5dd8-4523-b89c-b69845eb07d9%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=e6be0d23-004e-4d8a-95b4-42c0d3dccc17&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true" target="_blank" rel="noreferrer">
                                <Icon icon="mdi:twitter" style={{width: 30, height: 30}}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>05/22/2023</div>
                        </div>
                        <div>
                            <div>9:00 AM</div>
                        </div>
                        <div>
                            <div>Daya Baran</div>
                        </div>
                        <div>
                            <div>Dep 64</div>
                        </div>
                        <div>
                            <div><a href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_NGFiNzZjYTktMTIxYi00YjVkLTg4ZTMtYmNiZTlhMGFjMjhk%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%2522c0a96a14-a905-4caa-8c29-a227571a29a2%2522%252c%2522Oid%2522%253a%25225a51b742-5dd8-4523-b89c-b69845eb07d9%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=e6be0d23-004e-4d8a-95b4-42c0d3dccc17&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true"
                            target="_blank" rel="noreferrer">
                            Court Watch Link</a></div>
                        </div>
                        <div>
                            <div><a href="/" target="_blank">@freearianna</a></div>
                        </div>
                        <div>
                            <div style={{textAlign: 'center'}}>
                                <a href="https://twitter.com/intent/tweet?text=Court%20Watch%20for%20Daya%20Baran%20https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_NGFiNzZjYTktMTIxYi00YjVkLTg4ZTMtYmNiZTlhMGFjMjhk%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%2522c0a96a14-a905-4caa-8c29-a227571a29a2%2522%252c%2522Oid%2522%253a%25225a51b742-5dd8-4523-b89c-b69845eb07d9%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=e6be0d23-004e-4d8a-95b4-42c0d3dccc17&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true" target="_blank" rel="noreferrer">
                                <Icon icon="mdi:twitter" style={{width: 30, height: 30}}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>05/12/2023</div>
                        </div>
                        <div>
                            <div>1:30 PM</div>
                        </div>
                        <div>
                            <div>Jeff Haskell</div>
                        </div>
                        <div>
                            <div>Dep 24</div>
                        </div>
                        <div>
                            <div><a href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_YmRhZTM2ZDMtOWI4YS00MTVlLThmYmYtNTBlN2NkMzA1YzJk%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%2522c0a96a14-a905-4caa-8c29-a227571a29a2%2522%252c%2522Oid%2522%253a%2522f22a2e10-b8a4-4725-aa75-d8c71eb432a6%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=897ee582-74a6-437b-9c30-4bf18cffceeb&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true"
                            target="_blank"
                            style={{backgroundColor: "transparent", border: 0}} rel="noreferrer">
                            Court Watch Link</a></div>
                        </div>
                        <div>
                            <div><a href="/freeaidan&faith" target="_blank">@freeaidan&faith</a></div>
                        </div>
                        <div>
                            <div style={{textAlign: 'center'}}>
                                <a href="https://twitter.com/intent/tweet?text=Court%20Watch%20for%20Jeff%20Haskell%20https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_NGFiNzZjYTktMTIxYi00YjVkLTg4ZTMtYmNiZTlhMGFjMjhk%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%2522c0a96a14-a905-4caa-8c29-a227571a29a2%2522%252c%2522Oid%2522%253a%25225a51b742-5dd8-4523-b89c-b69845eb07d9%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=e6be0d23-004e-4d8a-95b4-42c0d3dccc17&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true" target="_blank" rel="noreferrer">
                                <Icon icon="mdi:twitter" style={{width: 30, height: 30}}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </TableContent>
            </Container>
        </HomeTableWrap>
    );
};

export default AriannaTable;
