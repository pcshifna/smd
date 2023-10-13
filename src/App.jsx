import { useState, useReducer } from "react";
import First from "./Pages/First";

import "./App.css";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<First />} />
      </Routes>
    </>
  );
}

export default App;
