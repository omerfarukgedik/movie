import { Link } from "react-router-dom";

import "../assets/styles/movie.scss";
import notFoundImage from "../assets/images/not-found.jpg";

const Movie = ({ data }) => {
  const { Title, Year, imdbID, Type, Poster } = data;
  return (
    <Link to={`/${imdbID}`}>
      <div
        style={{
          backgroundImage: `url(${Poster !== "N/A" ? Poster : notFoundImage})`,
        }}
        className="movie"
      >
        <div className="movie__imdbId">
          imdbId: <i>{imdbID}</i> <br />
          Type: <i>{Type}</i>
        </div>
        <div className="movie__title">
          ({Year}) {Title}
        </div>
      </div>
    </Link>
  );
};

export default Movie;
