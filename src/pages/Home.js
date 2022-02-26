import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovies } from "../store/movies";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  const { movies, loading } = useSelector((state) => state.movies);

  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [params, setParams] = useSearchParams();

  const search = (text) => {
    setParams({ search: text || "Pokemon", page: 1 });
  };

  const setStates = async () => {
    const querySearch = params.get("search");
    const queryPage = parseInt(params.get("page"));

    setParams({
      search: querySearch || "Pokemon",
      page: queryPage || 1,
    });

    setPage(parseInt(params.get("page")));
    setSearchText(params.get("search"));
  };

  useEffect(async () => {
    await setStates();
    dispatch(fetchAsyncMovies());
    console.log(movies);
  }, [params, dispatch]);
  return (
    <>
      <SearchBar isLoading={loading} text={searchText} search={search} />

      <div style={{ minHeight: 500 }}>Movie list</div>
      <Pagination
        className="pagination-bar"
        isLoading={loading}
        currentPage={page || 1}
        totalCount={12}
        pageSize={10}
        onPageChange={(num) => setParams({ search: searchText, page: num })}
      />
    </>
  );
};

export default Home;
