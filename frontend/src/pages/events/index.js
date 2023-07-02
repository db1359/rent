import React, {Fragment} from 'react'
import TopNav from "../../layouts/navs/auth-topnav";
import EventsContent from "./components/action";

export const EventsPage = () => {
    return (
        <Fragment>
            <TopNav/>
            <EventsContent/>
        </Fragment>
    )
}

export default EventsPage