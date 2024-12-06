import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h2>{movie.title}</h2>
      <img src={movie.posterURL} alt={movie.title} style={{ width: "150px" }} />
      <p>{movie.description}</p>
      <p>Note : {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
