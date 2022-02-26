import Pagination from "../components/Pagination";
const Home = ({ currentPage, totalCount, pageChange }) => {
  return (
    <>
      <div style={{ minHeight: 500 }}>Movie list</div>
      <Pagination
        className="pagination-bar"
        currentPage={1}
        totalCount={250}
        pageSize={10}
        onPageChange={(page) => console.log(page)}
      />
    </>
  );
};

export default Home;
