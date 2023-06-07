import { combineReducers } from "redux";
import { cartreducer, incDecreducer } from "./reducer";

const rootred = combineReducers({
    cartreducer,
    incDecreducer
})
export default rootred