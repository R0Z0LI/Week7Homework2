import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import GamePage from "./pages/Game";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/:deckSize", element: <GamePage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
