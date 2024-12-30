import React from "react";
import { useGlobalContext } from "../../Context/context";
import { NavLink } from "react-router-dom";
import './Movies.css' 
const Movies = () => {
  const { movies,isLoading } = useGlobalContext();
  if(isLoading) 
  { 
    return(
      <div className="movie-section">
     <div className="loading"> Loading.... </div>
      </div>
    )

  }
  return (
    <>
      <section className="movie-page">
        <div className="grid grid-4-   col">
           {movies.map((movie) => {
            const {imdbID,Title,Poster}=movie;
            
            return ( 
              <NavLink key={imdbID} to={`movie/${imdbID}`}> 
                  <div className="card"> 
                    <div className="card-info">
                      <h2>{Title.length>15 ? `${Title.substring(0,15)}...`: Title}</h2>
                      <img src={Poster} alt={imdbID} /> 
                    </div>
                  </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;
