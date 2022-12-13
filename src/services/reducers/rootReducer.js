import { combineReducers } from "redux";
import authReducer from "./authReducer";
import bookReducer from "./bookReducer";
import genreReducer from "./genreReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
    AUTH_REDUCER: authReducer,
    BOOK_REDUCER: bookReducer,
    MODAL_REDUCER: modalReducer,
    GENRE_REDUCER: genreReducer
})

export default rootReducer