import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTES } from "../constant";
import { productsServise } from "../servise/productServie";
export const productAsync = createAsyncThunk(ASYNC_ROUTES.HOME,
    async(payload,{rejectWithValue})=>{
        try{
            const response = await productsServise(payload);
            return response;
        }catch(err){
            return rejectWithValue(err)
        }
    });

