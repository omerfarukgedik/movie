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
    dispatch(fetchAsyncMovie({ apiUrl, imdbId: id, apiKey }));

    console.log(data);
  }, [dispatch, id]);
  return (
    <>
      <div style={{ minHeight: 500 }}>{data.Title}</div>
    </>
  );
};

export default MovieDetail;
