import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type IProduct = {
  status: boolean;
  rating: number;
  price: number;
};

const initialState: IProduct = {
  status: false,
  rating: 3,
  price: 150,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setToggle: (state) => {
      state.status = !state.status;
    },
    setPriceRange: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
  },
});
export const { setToggle, setPriceRange } = productSlice.actions;
export default productSlice.reducer;
