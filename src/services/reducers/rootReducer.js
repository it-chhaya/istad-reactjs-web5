import { combineReducers } from "redux";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    AUTH_REDUCER: authReducer
})

export default rootReducer