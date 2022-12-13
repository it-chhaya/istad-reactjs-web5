import secureLocalStorage from "react-secure-storage"
import { BASE_URL } from "../constants"
import { FETCH_BOOKS, SAVE_BOOK } from "./actionTypes"

export const removeBookById = (id) => {
    return (dispatch) => {
        return fetch(`${BASE_URL}books/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': secureLocalStorage.getItem('auth').authHeader,
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            return Promise.resolve()
        })
    }
}

export const postBook = (bookRequest) => {
    return (dispatch) => {
        return fetch(`${BASE_URL}books`, {
            method: 'POST',
            headers: {
                'Authorization': secureLocalStorage.getItem('auth').authHeader,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookRequest)
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            return Promise.resolve()
        })
    }
}

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