import { auth } from '@/lib/firebase';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

type IUserState = {
  user: {
    email: string | null;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | null;
};
const initialState: IUserState = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: false,
  error: null,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    }),
      builder
        .addCase(createUser.rejected, (state, action) => {
          state.isError = true;
          state.isLoading = false;
          state.error = action.error.message!;
        })
        .addCase(createUser.fulfilled, (state, action) => {
          state.user.email = action.payload;
          state.error = null;
          state.isError = false;
          state.isLoading = false;
        })
        .addCase(loginUser.pending, (state) => {
          state.isLoading = true;
          state.isError = false;
          state.error = null;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.isError = true;
          state.isLoading = false;
          state.error = action.error.message!;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.user.email = action.payload;
          state.error = null;
          state.isError = false;
          state.isLoading = false;
        });
  },
});
type ICredential = {
  email: string;
  password: string;
};
export const createUser = createAsyncThunk(
  '/user/createUser',
  async ({ email, password }: ICredential) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data?.user?.email;
  }
);

export const loginUser = createAsyncThunk(
  '/user/loginUser',
  async ({ email, password }: ICredential) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data?.user?.email;
  }
);
export default userSlice.reducer;
export const { setUser } = userSlice.actions;
