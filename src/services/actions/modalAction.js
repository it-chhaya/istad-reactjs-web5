import { SAVED_BOOK_MODAL } from "./actionTypes"

export const setSavedBookModalStatus = (status) => {
    return (dispatch) => {
        return dispatch({
            type: SAVED_BOOK_MODAL,
            payload: status
        })
    }
}