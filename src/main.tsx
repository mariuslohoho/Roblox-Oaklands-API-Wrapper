import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App";
import "./index.css";
import ClassicShop from "./pages/ClassicShop";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import StockMarket from "./pages/StockMarket";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  { path: "/Classic-Shop", element: <ClassicShop /> },
  { path: "/Stock-Market", element: <StockMarket /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);
