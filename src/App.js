import "./App.css";

import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import { Container } from "./components/Container";
import { Features } from "./components/features/features";
import { About } from "./components/About/About";
import { AboutSecondary } from "./components/About/AboutSecondary";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="feuters" element={<Features />} />
        <Route path="about" element={<About />}>
          <Route path="guide" element={<AboutSecondary />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
