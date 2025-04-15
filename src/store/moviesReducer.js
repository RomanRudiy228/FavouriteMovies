import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    total: 0,
    currentPage: 1
  },
  reducers: {
    setMovies: (state, action) => {
      state.list = action.payload.movies;
      state.total = action.payload.total;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    }
  }
});

export const { setMovies, setCurrentPage } = moviesSlice.actions;
export default moviesSlice.reducer;