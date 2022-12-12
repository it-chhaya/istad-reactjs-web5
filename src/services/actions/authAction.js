import secureLocalStorage from 'react-secure-storage'
import { BASE_URL } from '../constants'
import { LOGIN_SUCCESS, LOGOUT } from './actionTypes'

export const login = (loggedInRequest) => {
	return (dispatch) => {
		return fetch(`${BASE_URL}auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(loggedInRequest),
		})
			.then((res) => res.json())
			.then((json) => {
				console.log(json)
				if (json.code === 200) {
					secureLocalStorage.setItem('auth', json.data)
					dispatch({
						type: LOGIN_SUCCESS,
						payload: json.data,
					})

					return Promise.resolve()
				}
			})
	}
}

export const logout = () => {
    return (dispatch) => {
        secureLocalStorage.removeItem('auth')
        dispatch({
            type: LOGOUT,
            payload: null
        })
        return Promise.resolve()
    }
}
