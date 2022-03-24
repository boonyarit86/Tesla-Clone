import { configureStore } from '@reduxjs/toolkit';
import productReducer from "../features/car/productSlice"

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
