import { createSlice, createSelector } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      // Immer позволяет писать "мутабельно", но делает всё правильно
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Мемоизированный селектор (из пункта 8 лабы)
export const selectCartTotal = createSelector(
  (state) => state.cart.items,
  (items) => items.length
);

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;