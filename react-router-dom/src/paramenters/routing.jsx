import { Layout } from "./layout";
import { Movie } from "./movie.request.page";
import { fetchMovie } from "./fetch-movie";
import { Movies } from "./movies"; // Import the Movies component
import { createBrowserRouter } from "react-router-dom";

export const routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Movies />, // Render Movies component at the base path
      },
      {
        path: "/movie/:movieId",
        element: <Movie />,
        loader: fetchMovie, // Fetch movie data for this route
      },
    ],
  },
]);
