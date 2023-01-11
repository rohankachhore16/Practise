import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "../Slice/CartSlice"
import productReducer from "../Slice/productSlice";
const store = configureStore({
    reducer:{
    cart:cartReducer,
    products:productReducer
},
})
export default store;