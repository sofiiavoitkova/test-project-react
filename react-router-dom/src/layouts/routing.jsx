import { Index } from "./index.page";
import { Layout } from "./layouts";
import { MoviesPage } from "./movies.page";
import { ErrorPage } from "./error.page";

export const routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    children: [
      { index: true, element: <Index /> },
      {
        path: "/movies",
        element: <MoviesPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
