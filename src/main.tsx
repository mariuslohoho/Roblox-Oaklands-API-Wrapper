import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ClassicShop from "./pages/ClassicShop";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
// import StockMarket from "./pages/StockMarket";
import SettingsContextProvider from "./contexts/SettingsProvider.tsx";
import LeaderboardLandingPage from "./pages/leaderboard/LeaderboardLandingPage";
// import TopPlayers from "./pages/leaderboard/TopPlayers.tsx";

const router = createHashRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  { path: "/Classic-Shop", element: <ClassicShop /> },
  {
    path: "/leaderboard",
    element: <LeaderboardLandingPage />,
  },
  // { path: "/leaderboard/TopPlayers", element: <TopPlayers /> },
  // { path: "/Stock-Market", element: <StockMarket /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SettingsContextProvider>
      <RouterProvider router={router} />
    </SettingsContextProvider>
  </StrictMode>
);
