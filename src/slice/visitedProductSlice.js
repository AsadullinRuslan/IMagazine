import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visitedProduct: []
}

export const visitedProductSlice = createSlice({
    name: 'visitedProduct',
    initialState,
    reducers: {
        addVisitedProduct: (state, action) => {
            if(state.visitedProduct.length > 2) {
                state.visitedProduct.shift()
            } 
            state.visitedProduct = state.visitedProduct.filter(item => item.id !== action.payload.id)
            state.visitedProduct.push(action.payload)
        }
    }
})

export const { addVisitedProduct } = visitedProductSlice.actions
export default visitedProductSlice.reducer