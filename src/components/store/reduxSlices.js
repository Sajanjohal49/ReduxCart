import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import cartLogicSlice from "./cart-slice";
const initialCartState = { isShowCart: false, notification: null };
const cartSlice = createSlice({
  name: "Cart",
  initialState: initialCartState,
  reducers: {
    showCart(state) {
      state.isShowCart = true;
    },
    noShowCart(state) {
      state.isShowCart = false;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
        title:action.payload.title
      };
    },
  },
});
//here we have combine two reduxslices
const store = configureStore({
  reducer: { cart: cartSlice.reducer, cartLogic: cartLogicSlice.reducer },
});
export const createCartActions = cartSlice.actions;
export default store;
