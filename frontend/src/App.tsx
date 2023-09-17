import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Rent from "./Pages/Rent";
import Buy from "./Pages/Buy";
import Property from "./Pages/property";
import Navbar from "./Components/Navbar";
import PropertyAdd from "./Pages/PropertyAdd";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/property/:id/" element={<Property />}></Route>
        <Route path="/rent/" element={<Rent />}></Route>
        <Route path="/buy/" element={<Buy />}></Route>
        <Route path="/property/add/" element={<PropertyAdd />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
