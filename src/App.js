import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief who steals corporate secrets...",
      posterURL: "https://via.placeholder.com/150",
      rating: 8.8,
    },
    {
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole...",
      posterURL: "https://via.placeholder.com/150",
      rating: 8.6,
    },
  ]);

  const [filter, setFilter] = useState({ title: "", rating: 0 });

  // Ajouter un nouveau film
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // Gestion des filtres
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rating
  );

  return (
    <div>
      <h1>Application de Cinéma</h1>
      <Filter setFilter={setFilter} />
      <MovieList movies={filteredMovies} />
      {/* Formulaire d'ajout de film */}
      <button onClick={() => addMovie({
          title: "Nouveau Film",
          description: "Une description ici...",
          posterURL: "https://via.placeholder.com/150",
          rating: 7.5,
      })}>
        Ajouter un film
      </button>
    </div>
  );
};

export default App;
