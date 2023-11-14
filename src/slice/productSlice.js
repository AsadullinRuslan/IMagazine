import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    productId: {}
};

export const getProductById = createAsyncThunk(
    "getProductById",
    // eslint-disable-next-line no-unused-vars
    async (id, { rejectWithValue, dispatch }) => {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        dispatch(setProductById(res.data));
    }
);

export const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        setProductById: (state, action) => {
            state.productId = action.payload
        }
    }
});

export const { setProductById } = productSlice.actions
export default productSlice.reducer