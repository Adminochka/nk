import { createBrowserRouter, RouterProvider } from "react-router";

import { MainLayout } from "@/pageLayouts/mainLayout/mainLayout.tsx";
import { APP_PATHS } from "@/utils/costants.ts";

const router = createBrowserRouter([
  {
    path: APP_PATHS.main,
    element: (
      <MainLayout>
        <div>Hello World</div>
      </MainLayout>
    ),
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
