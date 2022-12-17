import { createSlice } from "@reduxjs/toolkit";

export const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    transactions: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setTransactions: (state, action) => {
      state.transactions = action.payload;
    },
  },
});

export const { setProducts, setTransactions } = ProductsSlice.actions;
export default ProductsSlice.reducer;
