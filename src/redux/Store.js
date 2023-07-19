import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";

export const store = configureStore({
    // slice key and name 
    reducer:{
        cart:cartSlice
    }
})