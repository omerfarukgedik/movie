import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovies } from "../store/movies";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import Movie from "../components/Movie";

import "../assets/styles/home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const { data, loading, total } = useSelector((state) => state.movies);

  const [searchText, setSearchText] = useState("Pokemon");
  const [page, setPage] = useState(1);
  const [year, setYear] = useState(null);
  const [type, setType] = useState(null);

  const search = (text, year, type) => {
    type && setType(type);
    year && setYear(year);
    setPage(1);
    setSearchText(text || "Pokemon");
  };

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = process.env.REACT_APP_API_URL;
    dispatch(
      fetchAsyncMovies({ apiUrl, searchText, apiKey, page, type, year }),
    );
  }, [page, searchText, dispatch, type, year]);
  return (
    <>
      <SearchBar isLoading={loading} text={searchText} search={search} />
      <div className="top-pagination">
        {!loading && (
          <span>
            Toplam <strong>{total}</strong> sonuçtan{" "}
            <strong>{data.length}</strong> tanesi gösteriliyor.
          </span>
        )}

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
      </div>

      <div className="movies">
        {loading ? (
          <>Loading...</>
        ) : (
          data.map((movie, index) => (
            <Movie key={movie.imdbID + index} data={movie} />
          ))
        )}
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
