import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    baskets: [],
};

export const basketSlice = createSlice({
    name: "basketSlice",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.baskets.push(action.payload);
        },
        removeFromBasket: (state, action) => {
            state.baskets = state.baskets.filter(item => item.id !== action.payload)
        }
    },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
