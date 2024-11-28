import { Product } from "@/constants/Interface";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (thunkAPI) => {
    const response = await axios.get("https://dummyjson.com/products");
    console.log("response.data=>", response.data);
    return response.data.products;
  }
);

interface ProductsState {
  products: Product[];
  status: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: ProductsState = {
  products: [],
  status: "idle",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.products = [];
      state.status = "failed";
    });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
