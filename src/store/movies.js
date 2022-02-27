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
  const { apiUrl, searchText, apiKey, page, type, year } = payload;
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const queryParams = new URLSearchParams({
        apiKey,
        s: searchText,
        page,
      });

      year && year > 0 && queryParams.append("y", year);
      type && queryParams.append("type", type);

      if (apiKey && apiUrl) {
        const response = await fetch(`${apiUrl}/?${queryParams}`);
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
