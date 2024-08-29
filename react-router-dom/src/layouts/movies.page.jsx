import { NavLink } from "react-router-dom";

export const MoviesPage = () => {
  return (
    <main className="main">
      <h1>Movies Page</h1>
      <p>Welcome to the Movies page! Here you can find a collection of films from the 20th century.</p>
      <NavLink to="/">Back to Home</NavLink>
    </main>
  );
};
