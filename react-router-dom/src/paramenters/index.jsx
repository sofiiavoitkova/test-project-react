import { RouterProvider } from "react-router-dom";
import { routing } from "./routing";

const App = () => {
  return <RouterProvider router={routing} />;
};

export default App;
