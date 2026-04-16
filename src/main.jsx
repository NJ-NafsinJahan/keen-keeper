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
import HomePage from "./pages/homePage/HomePage";
import KeenDetails from "./pages/keenDetails.jsx/KeenDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/keens",
        element: <Keens />,
      },
      {
        path: "/keens/:id",
        element: <KeenDetails />,
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
