import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Category } from "./pages/category";
import { Features } from "./pages/features";
import NavBar from "./components/navbar";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/category" element={<Category />} />
        <Route path="/features" element={<Features />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
