import { configureStore } from '@reduxjs/toolkit';
import AllBooksSlice from '../AllBooks/AllBooksSlice';
import Search from '../Search/searchSlice';

export const store = configureStore({
  reducer: {
    books: AllBooksSlice,
    search:Search
  },
});
