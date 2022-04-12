import React, { useState, useEffect } from "react";
import MovieCard from "./movieCard";
import axios from "axios";

const Moviedata = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      const data = await axios.get("http://localhost:3200/getmovies");
      setMovies(data.data);
      console.log("from the state", movies);
    };
    fetchMovieData();
  }, []);

  return (
    <>
      <h1>Trending Movies</h1>
      <div className="movie-container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default Moviedata;
