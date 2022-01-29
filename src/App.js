import "./App.css";
import PropTypes from "prop-types";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import { Features } from "./components/features/features";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="feuters" element={<Features />} />
      </Routes>
    </div>
  );
}

export default App;
