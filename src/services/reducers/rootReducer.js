import { combineReducers } from "redux";
import authReducer from "./authReducer";
import bookReducer from "./bookReducer";

const rootReducer = combineReducers({
    AUTH_REDUCER: authReducer,
    BOOK_REDUCER: bookReducer
})

export default rootReducer