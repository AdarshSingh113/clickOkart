import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductDataApi } from "../services/api";

export const fetchProductData = createAsyncThunk(
    "productList",
    async (data, { rejectWithValue }) => {
        return await getProductDataApi()
            .then((response) => {
                return response?.data;
            })
            .catch((error) => rejectWithValue(error));
    }
);

const initialState = {
    productList: [],
    loading: false,
};

const productSlice = createSlice({
    name: "productSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProductData.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchProductData.fulfilled, (state, { payload }) => {
            state.loading = false;
            // console.log("=================", payload);
            state.productList = payload;
        });
        builder.addCase(fetchProductData.rejected, (state, { payload }) => {
            state.loading = false;
        });
    },
});

export default productSlice.reducer;
