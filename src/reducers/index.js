import { combineReducers } from "redux";
import rootReducer from "./rootReducer";


const reducers = combineReducers({
    state: rootReducer
});

export default reducers;