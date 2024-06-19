//this is our cartSlice where set up our reducers to add and remove items from a cart
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
};
//we only need to set up two reducers addItem and removeItem
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
