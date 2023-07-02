import React, {useEffect, useState} from "react";
import Highcharts from "highcharts/highmaps";
import drilldow from "highcharts/modules/drilldown";
import RecallBanner from "../banners/recall";
import dataModule from "highcharts/modules/data";
import HighchartsReact from "highcharts-react-official";
import RecallPageWrap from "./style/wrap";
import Container from "../../style/container";
import {Breadcrumb, Button, Col, Result, Row, Space} from "antd";
import "./mapData";
import RecallsItem from "./item";
import {useNavigate, useParams} from "react-router-dom";
import {allRecallsApi, recallsApi} from "../../api";
import {Icon} from '@iconify/react';

drilldow(Highcharts);
dataModule(Highcharts);

const data = Highcharts.geojson(Highcharts.maps["countries/us/us-all"]);
const separators = Highcharts.geojson(Highcharts.maps["countries/us/us-all"], "mapline");
window.Highcharts = Highcharts;

const RecallPage = () => {
    const routeParams = useParams();
    const navigate = useNavigate()

    const [recalls, setRecalls] = useState([]);
    const [allRecalls, setAllRecalls] = useState([]);

    data.forEach( (el) => {
        el.drilldown = el.properties["hc-key"];
        let a = 0

        allRecalls.map((i)=>{
            if(i?.directory.state === el?.properties?.['hc-a2']) {
                a++;
            }
        })

        el.value = a;

    });

    const drilldown = (e) => {
        navigate(`/recalls/${e.point.drilldown.split("-")[1]}`)
    }

    const options = {
        chart: {
            events: {
                drilldown
            }
        },

        title: {
            text: 'Recall Map'
        },

        legend: false,

        colorAxis: {
            min: 0,
            minColor: "#f8dfef",
            maxColor: "#CE3DAF"
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
        accessibility:{
            enabled: false
        }
    };

    useEffect(() => {
        recallsApi({state: routeParams?.state, slug: routeParams?.slug})
            .then(({data}) => {
                setRecalls(data)
            })
            .catch((e) => {
                console.log(e)
            })
        allRecallsApi()
            .then(({data}) => {
                setAllRecalls(data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [routeParams])

    return (
        <RecallPageWrap>
            <RecallBanner/>
            <Container style={{marginTop: '30px'}}>
                <Row gutter={[32, 24]}>
                    <Col span={16}>
                        {/* <Breadcrumb style={{marginBottom:24}}>

                            <Icon icon="ic:round-home" style={{marginTop: '4px', marginRight: '10px'}}/>

                            <Breadcrumb.Item onClick={()=>{navigate('/recalls')}}><b>Recalls</b></Breadcrumb.Item>
                            {
                                routeParams?.state && (
                                    <Breadcrumb.Item onClick={()=>{navigate(`/recalls/${routeParams.state}`)}} style={{color: '#ce3daf'}}><b>{routeParams.state?.toUpperCase()}</b></Breadcrumb.Item>
                                )
                            }
                            {
                                routeParams?.slug && (
                                    <Breadcrumb.Item ><b>{routeParams.slug}</b></Breadcrumb.Item>
                                )
                            }
                        </Breadcrumb> */}
                        <Space
                            direction="vertical"
                            style={{width: "100%"}}
                            size={42}>
                            {
                                recalls.length > 0 ? (
                                    recalls.map((i) =>(
                                        i.directory?._id && <RecallsItem key={i['_id']} recall={i}/>
                                    ))
                                ): (
                                    <Result
                                        status="403"
                                        title="There are no recalls currently"
                                        subTitle="Start Recall"/>
                                )
                            }
                        </Space>
                    </Col>
                    <Col span={8}>
                        <div style={{position: "sticky", top: 102}}>
                            <HighchartsReact
                                highcharts={Highcharts}
                                options={options}
                                constructorType="mapChart"/>
                            <Button
                                type="primary"
                                size="large"
                                block
                                style={{marginTop: 0}}
                                onClick={() => {navigate("/recalls/submit")}}>
                                Start Recall
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </RecallPageWrap>
    );
}

export default RecallPage
