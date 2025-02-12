import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

export const reducers = combineReducers({
    amount: amountReducer
})

export default reducers