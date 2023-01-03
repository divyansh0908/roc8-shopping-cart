import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        setCart (state, action) {
            state.items = action.payload;
            state.totalQuantity = action.payload.length;
        },
        
        toggleLoading(state, action) {
            state.loading = action.payload;
        }

    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;



