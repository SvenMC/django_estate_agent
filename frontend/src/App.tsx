import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Property from './Pages/Property';
import './App.css';
import Home from './Pages/Home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
                <Route path="/property/:id/" element={<Property />}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
