import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import ContextProvider from "../Provider/Context";
import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init();
const App = React.lazy(() => import("./App"));
const Signup = React.lazy(() => import("./Pages/SignUp"));
const Login = React.lazy(() => import("./Pages/Login"));
const Error404 = React.lazy(() => import("./Pages/Error404"));
const Explore = React.lazy(() => import("./Pages/Explore"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <Suspense
        fallback={
          <div className="loading ">
            <div className="text-info spinner-border"></div>
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </ContextProvider>
  </React.StrictMode>,
);
