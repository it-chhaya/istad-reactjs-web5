import secureLocalStorage from "react-secure-storage"
import { BASE_URL } from "../constants"
import { FETCH_GENRES } from "./actionTypes"

export const fetchGenres = () => {
    return (dispatch) => {
        return fetch(`${BASE_URL}genres`, {
            method: 'GET',
            headers: {
                'Authorization': secureLocalStorage.getItem('auth').authHeader
            }
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            dispatch({
                type: FETCH_GENRES,
                payload: json.data
            })

            return Promise.resolve()
        })
    }
}