import { IProduct } from '@/types/globalTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
interface ICart {
  carts: IProduct[];
  total: number;
}
const initialState: ICart = {
  carts: [],
  total: 0,
};
const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      //check if the product exists in the carts
      //   if exists then increment quantity
      // else add the item in carts
      const isExists = state.carts.find(
        (product) => product._id === action.payload._id
      );
      if (isExists) {
        isExists.quantity! += 1;
      } else {
        state.carts.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;
    },

    removeOneFromCart: (state, action: PayloadAction<IProduct>) => {
      const isExists = state.carts.find(
        (product) => product._id === action.payload._id
      );
      if (isExists && isExists.quantity! > 1) {
        isExists.quantity! -= 1;
      } else {
        state.carts = state.carts.filter(
          (cart) => cart._id != action.payload._id
        );
      }
      state.total -= action.payload.price;
    },

    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.carts = state.carts.filter(
        (cart) => cart._id != action.payload._id
      );
      state.total -= action.payload.price * action.payload.quantity!;
    },
  },
});

export const { addToCart, removeOneFromCart, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
