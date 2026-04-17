import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./layout/RootLayout";
import Keens from "./pages/keens/Keens";
import TimeLine from "./pages/timeLine/TimeLine";

import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/homePage/HomePage";
import KeenDetails from "./pages/keenDetails.jsx/KeenDetails";
import { TimelineProvider } from "./components/context/TimelineContext";
import { ToastContainer } from "react-toastify";
import Analytics from "./pages/statAnalytics/Analytics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
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
        element: <Analytics />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TimelineProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </TimelineProvider>
  </StrictMode>,
);
