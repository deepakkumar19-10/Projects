import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";
import FavoritesDrawer from "./components/FavoritesDrawer";
import YatraPlannerModal from "./components/YatraPlannerModal";

import Home from "./pages/Home";
import Temples from "./pages/Temples";
import TempleDetails from "./pages/TempleDetails";
import Places from "./pages/Places";
import Yatra from "./pages/Yatra";
import YatraDetails from "./pages/YatraDetails";
import Panchang from "./pages/Panchang";
import Events from "./pages/Events";
import Food from "./pages/Food";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <FavoritesDrawer />
      <YatraPlannerModal />

      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/temples" element={<Temples />} />
          <Route path="/temples/:id" element={<TempleDetails />} />

          <Route path="/places" element={<Places />} />

          <Route path="/yatra" element={<Yatra />} />
          <Route path="/yatra/:id" element={<YatraDetails />} />

          <Route path="/panchang" element={<Panchang />} />

          <Route path="/events" element={<Events />} />

          <Route path="/food" element={<Food />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageTransition>
    </>
  );
}

export default App;
