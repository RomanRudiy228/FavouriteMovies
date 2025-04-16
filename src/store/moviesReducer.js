import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    total: 0,
    currentPage: 1,
    isLoading: false,
    error: null
  },
  reducers: {
    setMovies: (state, action) => {
      state.list = action.payload.movies;
      state.total = action.payload.total;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setMovies, setCurrentPage, setLoading, setError } = moviesSlice.actions;
export default moviesSlice.reducer;