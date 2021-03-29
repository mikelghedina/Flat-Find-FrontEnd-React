import {combineReducers} from "redux";
import priceReducer from "./reducers/priceReducer";


const rootReducer= combineReducers({
    price: priceReducer
})

export default rootReducer;