import { Link } from "react-router-dom";

import "../styles/movie.scss";

const Movie = ({ data }) => {
  const { Title, Year, imdbID, Type, Poster } = data;

  return (
    <Link to={`/${imdbID}`}>
      <div style={{ backgroundImage: `url(${Poster})` }} className="movie">
        <div className="movie__imdbId">
          imdbId: <i>{imdbID}</i>{" "}
        </div>
        <div className="movie__title">
          ({Year}) {Title}
        </div>
      </div>
    </Link>
  );
};

export default Movie;
