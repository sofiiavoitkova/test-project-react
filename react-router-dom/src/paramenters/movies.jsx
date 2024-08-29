import { NavLink } from "react-router-dom";

export const Movies = () => {
  // Dummy list of movies to display
  const movies = [
    { id: 1, name: "The Lord of The Rings" },
    { id: 2, name: "The Matrix" },
    { id: 3, name: "Inception" },
  ];

  return (
    <div>
      <h1>Movies List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {/* NavLink to navigate to the specific movie page */}
            <NavLink to={`/movie/${movie.id}`}>{movie.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
