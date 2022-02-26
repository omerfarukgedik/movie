import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./movies";
import movieReducer from "./movie";

const rootReducer = combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
