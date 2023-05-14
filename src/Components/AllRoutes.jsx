import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Player from "./Player";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/player" element={<Player />} />
    </Routes>
  );
};

export default AllRoutes;
