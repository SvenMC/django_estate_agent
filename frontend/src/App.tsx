import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Property from './Pages/Property';
import './App.css';
import Home from './Pages/Home';
import Rent from './Pages/Rent';
import Buy from './Pages/Buy';
import Navbar from './Components/Navbar';

function App() {
    return (
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
                <Route path="/property/:id/" element={<Property />}>
                </Route>
                <Route path="/rent/" element={<Rent />}>
                </Route>
                <Route path="/buy/" element={<Buy />}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
