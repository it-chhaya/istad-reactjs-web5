import secureLocalStorage from "react-secure-storage"
import { LOGIN_SUCCESS } from "./types"

export const login = (loggedInRequest) => (dispatch) => {
    return fetch(`https://api-reading.istad.co/api/v1/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loggedInRequest)
    })
    .then(res => res.json())
    .then(json => {

        console.log(json)
        secureLocalStorage.setItem('auth', json.data)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: { auth: json.data }
        })

        return Promise.resolve()
    })
}