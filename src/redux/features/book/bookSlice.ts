import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type IBook = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews?: string[];
};

const initialState: IBook = {
  title: '',
  author: '',
  genre: '',
  publicationDate: '',
  reviews: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setAuthor: (state, action: PayloadAction<string>) => {
      state.author = action.payload;
    },
    setGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    setPublicationDate: (state, action: PayloadAction<string>) => {
      state.publicationDate = action.payload;
    },
    setReviews: (state, action: PayloadAction<string>) => {
      state.reviews?.push(action.payload);
    },
  },
});
export const { setAuthor, setGenre, setPublicationDate, setReviews, setTitle } =
  bookSlice.actions;
export default bookSlice.reducer;
