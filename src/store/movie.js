import { createSlice } from "@reduxjs/toolkit";

const movie = createSlice({
  name: "movie",
  initialState: {
    loading: false,
    movie: {},
  },
  reducers: {
    setLoading: (state, { payload }) => (state.loading = payload),
    setMovie: (state, { movie }) => {
      state.movie = movie;
    },
  },
});

export const { setLoading, setMovie } = movie.actions;

export default movie.reducer;

export function fetchAsyncMovie() {
  return async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const response = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=b6a1bf57",
      );
      const data = await response.json();

      dispatch(setMovie(data));
    } catch (err) {
      dispatch(setMovie({}));
    }
  };
}
