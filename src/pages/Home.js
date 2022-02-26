import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovies } from "../store/movies";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  const { data, loading, total } = useSelector((state) => state.movies);

  const [searchText, setSearchText] = useState("Pokemon");
  const [page, setPage] = useState(1);

  const search = (text) => {
    setPage(1);
    setSearchText(text || "Pokemon");
  };

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    dispatch(fetchAsyncMovies(searchText, apiKey));
  }, [page, searchText, dispatch]);
  return (
    <>
      <SearchBar isLoading={loading} text={searchText} search={search} />

      <div style={{ minHeight: 500 }}>
        Movie list ({total}, {data.length})
      </div>
      <Pagination
        className="pagination-bar"
        isLoading={loading}
        currentPage={page || 1}
        totalCount={total}
        pageSize={10}
        onPageChange={(num) => {
          setSearchText(searchText);
          setPage(num);
        }}
      />
    </>
  );
};

export default Home;
