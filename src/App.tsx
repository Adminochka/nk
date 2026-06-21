import { createBrowserRouter, RouterProvider } from "react-router";

import { APP_PATHS } from "./utils/costants.ts";

const router = createBrowserRouter([
  {
    path: APP_PATHS.main,
    element: <div>Hello World</div>,
  },
  {
    path: "/anna",
    element: <div>Anna World</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
