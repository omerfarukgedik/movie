import "../styles/movie.scss";

const Movie = ({ data }) => {
  const { Title, Year, imdbID, Type, Poster } = data;

  return (
    <>
      <div className="movie">{Title}</div>
    </>
  );
};

export default Movie;
