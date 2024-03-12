import React from "react";
import './App.css';
import VendingMachine from './VendingMachine';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Snack from "./Snack";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/snack/:snackId" element={<Snack />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
