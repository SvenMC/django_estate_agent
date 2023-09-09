import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Property from './Pages/property';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/prop/:id" element={<Property />}>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
