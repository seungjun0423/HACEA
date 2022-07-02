import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: '',cartItems:{} };

const ShopSlice = createSlice({
  name: 'shop',
  initialState: initialState,
  reducers: {
    items: (state,actions) => {
      state.item = actions.payload;
    },
    cartItems: (state,actions) => {
      state.cartItem = actions.payload;
    },
    
  }
});

export const { items, cartItems } = ShopSlice.actions;

export default ShopSlice.reducer;