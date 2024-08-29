import { NavLink } from "react-router-dom";

export const Index = () => (
  <main className="main">
    <h1>Index page</h1>
    <p>This page is dedicated to the Super-Duper films from the 20th century.</p>
    <NavLink to="/movies">To Movies</NavLink>
  </main>
);

// The footer section is commented out:
// <footer>
//   <NavLink to="/">Home</NavLink> 
//   <NavLink to="/movies">Movies</NavLink>
// </footer>
