import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { API_URL } from "../../Context/context";
import './SingleMovie.css'
const SingleMovies = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState({ show: false, msg: "" });

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("api", data);
      if (data.Response === "True") {
        setMovies(data);
        setIsError({
          show: false,
          msg: "",
        });
        setIsLoading(false);
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log("There is an error in single page", error);
    }
  };
  useEffect(() => {
    getMovies(`${API_URL}&i=${id}`);
  }, [id]);
  return (
    <>
      <section className="movie-section">
        {console.log("SIngle movie", movies, API_URL)}
        <div className="movie-card">
          <figure>
            <img src={movies.Poster} alt="movie poster" />
          </figure>
          <div className="card-content"> 
             <p className="title"> {movies.Title}</p>
            <p className="card-text"> {movies.Released}</p>
            <p className="card-text"> {movies.Genre}</p>
            <p className="card-text"> {movies.imdbRating}</p>
            <p className="card-text"> {movies.Country}</p>
            <NavLink to='/' className='back-btn'> Go back</NavLink>
             </div>
        </div> 
      </section>
    </>
  );
};

export default SingleMovies;
