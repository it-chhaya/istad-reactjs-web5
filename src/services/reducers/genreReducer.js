import { FETCH_GENRES } from "../actions/actionTypes"

const initialState = {
    genres: []
}

const genreReducer = (state = initialState, action) => {

    const {type, payload} = action

    switch(type) {
        case FETCH_GENRES:
            return {
                ...state,
                genres: payload
            }
        default: return state
    }

}

export default genreReducer