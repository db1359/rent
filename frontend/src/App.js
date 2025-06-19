import {ConfigProvider} from "antd";
import React from 'react';
import {Provider} from "react-redux";
import GlobalStyle from "./style/global";
import LandingLayout from "./layouts/landing.layout";
import {store} from "./redux/store";

const App = () => {

    return (
        <Provider
            store={store}>
            <ConfigProvider
                theme={{
                    token: {
                        fontFamily: "'Open Sans', sans-serif",
                        colorPrimary: "rgb(151, 1, 252)",
                        colorPrimaryText: "#000000",
                        colorPrimaryTextActive: "#000000",
                        colorPrimaryBg: "rgb(151, 1, 252)",
                        colorError: "#ff0000",
                        colorErrorText: "#FFFFFF",
                        borderRadius: 0,
                        colorBgLayout: "transparent",
                        colorLink: "#000000",
                        colorLinkHover: "rgb(151, 1, 252)",
                    },
                }}>
                <GlobalStyle/>
                <LandingLayout/>
            </ConfigProvider>
        </Provider>
    );
}

export default App;
