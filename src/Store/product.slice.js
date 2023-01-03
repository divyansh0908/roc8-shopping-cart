import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        availableProducts: null,
        productToAdd: null,
        toi: 10
    },
    reducers: {
        setAvailableProducts(state, action) {
            // console.log("setting available products", action);
            state.availableProducts = action.payload;

        },
        setProductToAdd(state, action) {
            state.productToAdd = action.payload;
        }
    }
});

export const productActions = productSlice.actions;
export default productSlice.reducer;