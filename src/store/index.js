import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesReducer";
import themeReducer from "./themeReducer";

const store = configureStore ({
    reducer: {
        movies: moviesReducer,
        theme: themeReducer
    }
});

export default store;