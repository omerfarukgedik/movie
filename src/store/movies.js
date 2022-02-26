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

export const fetchAsyncMovies = (payload) => {
  const { searchText, apiKey, page } = payload;
  console.log(payload);
  return async (dispatch) => {
    const queryParams = new URLSearchParams({ apiKey, s: searchText, page });
    console.log(queryParams.toString());
    try {
      if (apiKey && searchText) {
        dispatch(setLoading(true));

        const response = await fetch(`http://www.omdbapi.com/?${queryParams}`);
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
