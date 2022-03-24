import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: [
        {
          id: "c1",
          name: "Modal S",
          description: "Order Online for Touchless Delivery",
          image: "model-s.jpg",
        },
        {
          id: "c2",
          name: "Modal Y",
          description: "Order Online for Touchless Delivery",
          image: "model-y.jpg",
        },
        {
          id: "c3",
          name: "Modal 3",
          description: "Order Online for Touchless Delivery",
          image: "model-3.jpg",
        },
        {
          id: "c4",
          name: "Modal X",
          description: "Order Online for Touchless Delivery",
          image: "model-x.jpg",
        },
      ],
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {}
})

export const selectCars = state => state.product.cars;
export default productSlice.reducer