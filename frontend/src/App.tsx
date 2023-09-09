import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Property from './Pages/Property';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/property/:id/" element={<Property />}>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
