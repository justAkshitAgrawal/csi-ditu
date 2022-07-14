import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Team from "./pages/Team";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/events" element={<Events />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  );
}

export default App;
