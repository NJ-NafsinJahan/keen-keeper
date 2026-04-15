import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import RootLayout from "./layout/RootLayout";
import Keens from "./pages/keens/Keens";
import TimeLine from "./pages/timeLine/TimeLine";
import StatAnalytics from "./pages/statAnalytics/statAnalytics";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <h1> Home Page</h1>,
      },
      {
        path: "/keens",
        element: <Keens />,
      },
      {
        path: "/timeline",
        element: <TimeLine />,
      },
      {
        path: "/statAnalytics",
        element: <StatAnalytics />,
      },
    ],

    errorElement: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
