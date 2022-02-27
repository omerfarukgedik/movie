import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAsyncMovie } from "../store/movie";
import { useDispatch, useSelector } from "react-redux";

import "../styles/movieDetail.scss";

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.movie);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = process.env.REACT_APP_API_URL;
    dispatch(fetchAsyncMovie({ apiUrl, apiKey, imdbId: id }));
  }, [dispatch, id]);
  return loading ? (
    <>
      <div>Loading...</div>
    </>
  ) : (
    <div className="movie_detail">
      <div
        className="movie_detail__poster"
        style={{ backgroundImage: `url(${data.Poster})` }}
      >
        <span className="imdbPoint">{data.Title}</span>
      </div>

      <div className="movie_detail__info">
        {Object.keys(data).map((key, index) => (
          <div className="movie_detail__info_each" key={key + index}>
            <span>{key}</span>
            <div>
              {(typeof data[key] == "string" &&
                data[key].length < 50 &&
                data[key]) ||
                "-"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetail;
