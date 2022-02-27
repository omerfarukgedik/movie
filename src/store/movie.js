import { createSlice } from "@reduxjs/toolkit";

const movie = createSlice({
  name: "movie",
  initialState: {
    loading: false,
    data: {},
  },
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setMovie: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { setLoading, setMovie } = movie.actions;

export default movie.reducer;

export function fetchAsyncMovie(payload) {
  const { apiUrl, imdbId, apiKey } = payload;
  return async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const queryParams = new URLSearchParams({ apiKey, i: imdbId });
      const response = await fetch(`${apiUrl}/?${queryParams}`);
      const data = await response.json();

      data.Response === "True"
        ? dispatch(setMovie(data))
        : dispatch(setMovie({}));

      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setMovie({}));
      dispatch(setLoading(false));
    }
  };
}
