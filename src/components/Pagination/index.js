import classnames from "classnames";
import { usePagination, DOTS } from "./usePagination";
import "../../styles/pagination.scss";

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
  isLoading,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const lastPage = paginationRange.at(-1);
  return (
    <ul
      className={classnames("pagination-container", {
        [className]: className,
        loading: isLoading,
      })}
    >
      {/* Left navigation arrow */}
      <li
        className={classnames("pagination-item", {
          disabled: currentPage <= 1,
        })}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map((pageNumber, index) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <li key={pageNumber + index} className="pagination-item dots">
              &#8230;
            </li>
          );
        }
        return (
          <li
            className={classnames("pagination-item", {
              selected: pageNumber === currentPage,
            })}
            key={pageNumber + index}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={classnames("pagination-item", {
          disabled: currentPage >= lastPage,
        })}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;
