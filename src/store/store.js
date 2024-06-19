//import the store configuration from redux
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice.js';
//set up the store with our reducers 
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});