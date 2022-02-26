import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [isLoading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [params, setParams] = useSearchParams();

  const search = (text) => {
    setParams({ search: text || "Pokemon", page: 1 });
  };

  useEffect(async () => {
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

    await setStates();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [params]);
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
