import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ClassicShop from "./pages/ClassicShop";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
// import StockMarket from "./pages/StockMarket";
import SettingsContextProvider from "./contexts/SettingsProvider.tsx";

const router = createHashRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  { path: "/Classic-Shop", element: <ClassicShop /> },
  // { path: "/Stock-Market", element: <StockMarket /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SettingsContextProvider>
      <RouterProvider router={router} />
    </SettingsContextProvider>
  </StrictMode>
);
