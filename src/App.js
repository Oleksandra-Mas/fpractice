import "./App.css";
import PropTypes from "prop-types";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import { Container } from "./components/Container";
import { Features } from "./components/features/features";

function App() {
  return (
    <Container>
      <Header />
      <Hero />
      <Features />
    </Container>
  );
}

export default App;
