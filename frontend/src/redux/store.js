import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import RootReducer from "./redux/root";
import { composeWithDevTools } from 'redux-devtools-extension'
import {loadState, saveState} from "../utils/helper/storage.helper";

const persistedState = loadState()

export const store = createStore(
    RootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => saveState(store.getState()))
