import secureLocalStorage from "react-secure-storage"
import { BASE_URL } from "../constants"
import { FETCH_BOOKS } from "./actionTypes"

export const fetchBooks = (pageNum, pageSize) => {
    const authHeader = secureLocalStorage.getItem('auth').authHeader
    return (dispatch) => {
        return fetch(`${BASE_URL}books?pageNum=${pageNum}&pageSize=${pageSize}`, {
            method: 'GET',
            headers: {
                Authorization: authHeader
            }
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            if (json.code === 200) {
                dispatch({
                    type: FETCH_BOOKS,
                    payload: json.data
                })
            }

            return Promise.resolve()
        })
    }
}