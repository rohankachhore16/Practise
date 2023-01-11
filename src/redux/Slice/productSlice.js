import { createSlice } from "@reduxjs/toolkit";
import { THUNK_STATUS } from "../constant";
import { productAsync } from "../../redux/asyncThunk/productAsync";
// export const STATUS = Object.freeze({
//     IDLE:'idle',
//     ERROR:'error',
//     LOADING:'loading'
// })
const initialState = {
  status: null,
  data: [],
};
const productSlice = createSlice({
  // name:'products',
  // initialState:{
  //     data:[],
  //     status:STATUS.IDLE,

  // },
  name: "products",
  initialState,
  reducers: {
    //     setProduct(state,action){
    //          state.data = action.payload
    //     },
    //     setStatus(state,action){
    //         state.status = action.payload
    //    },
  },
  extraReducers: (builder) => {
    builder.addCase(productAsync.pending, (state, action) => {
      state.status = THUNK_STATUS.LOADING;
    });
    builder.addCase(productAsync.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.status = THUNK_STATUS.IDLE;
    });
    builder.addCase(productAsync.rejected, (state, action) => {
      state.status = THUNK_STATUS.ERROR;
    });
  },
});

export default productSlice.reducer;

// export const fetchProducts = createAsyncThunk('products/fetch',async () =>{
//     const res = await fetch("https://fakestoreapi.com/products")
//     const data = await res.json();
//     return data;
// }

// )
