import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        items: [],
    },
    //Mutating the State
    reducers: {
        addItem: (state, action) => {
            console.log(current(state));
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0; //state = [];
            //return {items: []}
        },
        increaseQuantity: (state, action) => {
            const { id } = action.payload;
            const item = state.items.find((item) => item.id === id);
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const { id } = action.payload;
            const item = state.items.find((item) => item.id === id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
    },
});

export const {
    addItem,
    removeItem,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
