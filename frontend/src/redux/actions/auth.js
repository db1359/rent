import {LOGIN, LOGOUT, UPDATE_PROFILE} from "../redux/auth";
import {removeToken, saveToken} from "../../utils/helper/storage.helper";

export const loginAction = ({user, token}) => (dispatch) => {
    saveToken(token)
    dispatch({
        type: LOGIN,
        data: {
            isAuth: true,
            user: user
        }
    })
}

export const updateProfileAction = (user) => (dispatch) => {
    dispatch({
        type: UPDATE_PROFILE,
        data: {
            ...user
        }
    })
}

export const logoutAction = () => (dispatch) => {
    removeToken()
    dispatch({
        type: LOGOUT
    })
}
