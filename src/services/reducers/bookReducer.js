import { FETCH_BOOKS } from "../actions/actionTypes"

const initializedState = {
    data: null
}

const bookReducer = (state = initializedState, action) => {

    const {type, payload} = action

    switch(type) {
        case FETCH_BOOKS:
            return {
                ...state,
                data: payload
            }
        default:
            return state
    }
}

export default bookReducer