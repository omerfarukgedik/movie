import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovies, setMovies } from "../store/movies";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { movies, loading } = useSelector(setMovies);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [params, setParams] = useSearchParams();

  const search = (text) => {
    setParams({ search: text || "Pokemon", page: 1 });
  };

  const setStates = async () => {
    setLoading(true);
    const querySearch = params.get("search");
    const queryPage = parseInt(params.get("page"));

    setParams({
      search: querySearch || "Pokemon",
      page: queryPage || 1,
    });

    setPage(parseInt(params.get("page")));
    setSearchText(params.get("search"));
  };

  //http://www.omdbapi.com/?i=tt3896198&apikey=b6a1bf57
  useEffect(async () => {
    await setStates();
    dispatch(fetchAsyncMovies);
    setLoading(false);
  }, [params, dispatch]);
  return (
    <>
      <SearchBar isLoading={isLoading} text={searchText} search={search} />

      <div style={{ minHeight: 500 }}>Movie list</div>
      <Pagination
        className="pagination-bar"
        isLoading={isLoading}
        currentPage={page || 1}
        totalCount={12}
        pageSize={10}
        onPageChange={(num) => setParams({ search: searchText, page: num })}
      />
    </>
  );
};

export default Home;
