import {ConfigProvider} from "antd";
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
                        colorPrimary: "#ce3daf",
                        //colorPrimary: "#f7ce07",
                        colorPrimaryText: "#000000",
                        colorPrimaryTextActive: "#000000",
                        colorPrimaryBg: "#ce3daf",
                        //colorPrimaryBg: "#f7ce07",
                        colorError: "#ff0000",
                        colorErrorText: "#FFFFFF",
                        borderRadius: 0,
                        colorBgLayout: "transparent",
                        colorLink: "#000000",
                        colorLinkHover: "#cd3dae",
                    },
                }}>
                <GlobalStyle/>
                <LandingLayout/>
            </ConfigProvider>
        </Provider>
    );
}

export default App;
