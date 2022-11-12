import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ServiceProvider from "./pages/ServiceProvider";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service_provider" element={<ServiceProvider />} />
    </Routes>
  );
}

export default App;
