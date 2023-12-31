import { configureStore } from '@reduxjs/toolkit';
import cartSliceReducer from './features/cart/cartSlice';
// import productSliceReducer from './features/book/bookSlice';
import { api } from './api/apiSlice';
import bookSliceReducer from './features/book/bookSlice';
import userReducer from './features/user/userSlice';
const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
    // product: productSliceReducer,
    book: bookSliceReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
