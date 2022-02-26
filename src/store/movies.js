import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
  name: "movies",
  initialState: {
    loading: false,
    data: [],
    total: 0,
  },
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setMovies: (state, { payload }) => {
      state.data = payload.Search;
      state.total = payload.totalResults;
    },
  },
});

export const { setLoading, setMovies } = movies.actions;

export default movies.reducer;

export const fetchAsyncMovies = (searchText, apiKey) => {
  return async (dispatch) => {
    try {
      console.log(apiKey);
      console.log(searchText);
      if (apiKey && searchText) {
        dispatch(setLoading(true));

        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchText}`,
        );
        const data = await response.json();

        data.Response === "True"
          ? dispatch(setMovies(data))
          : dispatch(setMovies({ Search: [], totalResults: 0 }));

        dispatch(setLoading(false));
      }
    } catch (err) {
      dispatch(setMovies({ Search: [], totalResults: 0 }));
      dispatch(setLoading(false));
    }
  };
};
