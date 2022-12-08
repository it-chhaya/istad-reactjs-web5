import secureLocalStorage from "react-secure-storage"
import { LOGIN_FAIL, LOGIN_SUCCESS } from "../actions/types"

const auth = secureLocalStorage.getItem('auth')

const initialState = auth
    ? { isLoggedIn: true, auth }
    : { isLoggedIn: false, auth: null };

const authReducer = (state = initialState, action) => {

    const { type, payload } = action

    switch(type) {
        case LOGIN_SUCCESS: 
            return {
                ...state,
                isLoggedIn: true,
                auth: payload.auth
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }
        default: 
            return state
    }
}

export default authReducer