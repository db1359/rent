import React, {Fragment} from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import App from './App';
import 'antd/dist/reset.css';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Fragment>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Fragment>
);

reportWebVitals();
