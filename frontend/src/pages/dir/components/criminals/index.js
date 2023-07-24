import React, {Fragment, useEffect, useState} from 'react';
import HomeCriminalsWrap from "./style/wrap";
import Container from "../../../../components/paper/container";
import SectionTitle from "../../../../components/heading/section";
import {Button, Card, Checkbox, Col, Form, Input, message, Row, Select, Upload} from "antd";
import {createDirectoryApi, directoriesApi} from "../../../../api";
import {City, State} from "country-state-city";
import config from "../../../../config";
import {Icon} from "@iconify/react";
import {Link, useLocation, useNavigate, useParams, useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";
import drilldow from "highcharts/modules/drilldown";
import dataModule from "highcharts/modules/data";
import AddDir from "../add";

drilldow(Highcharts);
dataModule(Highcharts);

const data = Highcharts.geojson(Highcharts.maps["countries/us/us-all"]);
const separators = Highcharts.geojson(Highcharts.maps["countries/us/us-all"], "mapline");
window.Highcharts = Highcharts;

const Criminals = () => {
    const auth = useSelector(state => state.auth)

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();

    const [criminals, setCriminals] = useState([]);

    const [allDir, setAllDir] = useState([]);

    const [add, setAdd] = useState(false);

    const getHandle = () => {
        directoriesApi()
            .then(({data}) => {
                console.log(data)
                if(!!searchParams.get("state")) {
                    setCriminals(data.filter((i)=>i.state.toLowerCase() === searchParams.get('state')))
                } else {
                    setCriminals(data)
                }
                setAllDir(data)
            })
            .catch(e => console.log(e))
    }

    useEffect(() => {
        getHandle(searchParams.get("state"))
    }, [searchParams])

    const drilldown = (e) => {
        navigate(`/dir/?state=${e.point.drilldown.split("-")[1]}`)
    }

    data.forEach((el) => {
        el.drilldown = el.properties["hc-key"];
        let a = 0

        allDir.map((i) => {
            if (i?.state === el?.properties?.['hc-a2']) {
                a++;
            }
        })

        el.value = a;

    });

    const options = {
        chart: {
            events: {
                drilldown
            }
        },

        title: {
            text: 'Directory Map'
        },

        legend: false,

        colorAxis: {
            min: 0,
            minColor: "#f8dfef",
            maxColor: "#8f3dce"
        },

        mapNavigation: {
            enabled: false,
            buttonOptions: {
                verticalAlign: "bottom"
            }
        },

        plotOptions: {
            map: {
                states: {
                    hover: {
                        color: "#f7ce07"
                    }
                }
            }
        },

        series: [
            {
                data: data,
                name: "USA",
                dataLabels: {
                    enabled: true,
                    format: "{point.properties.postal-code}"
                }
            },
            {
                type: "mapline",
                data: separators,
                color: "silver",
                enableMouseTracking: false,
                animation: {
                    duration: 500
                }
            }
        ],

        drilldown: {
            activeDataLabelStyle: {
                color: "#FFFFFF",
                textDecoration: "none",
                textOutline: "1px #000000"
            },
            drillUpButton: {
                relativeTo: "spacingBox",
                position: {
                    x: 0,
                    y: 60
                }
            }
        },
        accessibility: {
            enabled: false
        }
    };

    console.log(criminals)

    return (
        <HomeCriminalsWrap>
            <Container>
                <Row gutter={[32, 24]}>
                    <Col span={16}>
                        {/* <SectionTitle>
                            Profiting Off Kids
                        </SectionTitle> */}
                        <Row gutter={[0, 0]} justify='center'>
                            {criminals.map((criminal, key) => (
                                <Col lg={{span: 8}} md={{span: 12}} span={24} key={key}>
                                    <Card className='criminal-card' bordered={false}>
                                        <Link to={`/${criminal.slug}`}><img src={criminal.photo} alt={criminal.name}/></Link>
                                        <h3><Link to={`/${criminal.slug}`}>{criminal.name}</Link></h3>
                                        <p><Link to={`/${criminal.slug}`}>{criminal.judge}</Link></p>
                                        <h5><Icon icon="ic:round-place"/> {criminal.city}, {criminal.state}</h5>
                                    </Card>
                                </Col>
                              ))
                            }
                        </Row>
                    </Col>
                    <Col span={8}>
                        <div style={{position: "sticky", top: 102}}>
                        <br/>
                            <HighchartsReact highcharts={Highcharts}
                                options={options}
                                constructorType="mapChart"/>
                            <Button block size="large" type="primary"
                                onClick={() => { !auth.isAuth ?
                                    navigate(`/login/?redirect=/dir`) : setAdd(true)}}>
                                Add to Directory
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <AddDir getHandle={getHandle} open={add} setOpen={setAdd}/>
        </HomeCriminalsWrap>
    );
};

export default Criminals;
