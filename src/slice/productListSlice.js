import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
};

export const getProducts = createAsyncThunk(
    "getProducts",
    // eslint-disable-next-line no-unused-vars
    async (_, { rejectWithValue, dispatch }) => {
        const res = await axios.get("https://fakestoreapi.com/products");
        dispatch(setProducts(res.data));
    }
);

export const productListSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        }
    }
})

export const { setProducts } = productListSlice.actions
export default productListSlice.reducer