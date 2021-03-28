import { combineReducers } from "redux";
import cartReducer from "./cart";
import modalReducer from "./modal";


const rootReducer = combineReducers({
    cartList: cartReducer,
    modalShow: modalReducer,
});

export default rootReducer;