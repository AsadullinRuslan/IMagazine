import { configureStore } from '@reduxjs/toolkit'
import productListSlice from '../slice/productListSlice'
import visitedProductSlice from '../slice/visitedProductSlice'
import productSlice from '../slice/productSlice'
import basketSlice from '../slice/basketSlice'

export const store = configureStore({
    reducer: {
        product: productListSlice,
        singleProduct: productSlice,
        visited: visitedProductSlice,
        basket: basketSlice,
    },
    devTools: true
})