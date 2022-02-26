import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
  name: "movies",
  initialState: {
    loading: false,
    movies: [],
  },
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setMovies: (state, { movies }) => {
      state.movies = movies;
    },
  },
});

export const { setLoading, setMovies } = movies.actions;

export default movies.reducer;

export const fetchAsyncMovies = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const response = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=b6a1bf57",
      );
      const data = await response.json();

      console.log(data);

      dispatch(setMovies(data));
    } catch (err) {
      dispatch(setMovies([]));
      dispatch(setLoading(false));
    }
  };
};
