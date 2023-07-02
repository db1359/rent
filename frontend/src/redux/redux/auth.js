import {loadState} from "../../utils/helper/storage.helper";

export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const UPDATE_PROFILE = "UPDATE_PROFILE"

const initialState = {
    isAuth: false,
    user: {}
}

const AuthReducer = (state = loadState()?.auth || initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                ...action.data
            }
        case LOGOUT:
            return {
                ...initialState
            }

        case UPDATE_PROFILE:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.data
                }
            }

        default:
            return {...state}
    }
}

export default AuthReducer
