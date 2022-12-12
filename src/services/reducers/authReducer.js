import secureLocalStorage from 'react-secure-storage'
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from '../actions/actionTypes'

const auth = secureLocalStorage.getItem('auth')

const initializedState = auth
	? { isLoggedIn: true, auth: auth }
	: { isLoggedIn: false, auth: null }

const authReducer = (state = initializedState, action) => {
	// Destructuring
	const { type, payload } = action

	switch (type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				isLoggedIn: true,
				auth: payload,
			}
		case LOGIN_FAIL:
			return {
				...state,
				isLoggedIn: false,
				auth: null,
			}
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                auth: null
            }
		default:
			return state
	}
}

export default authReducer
