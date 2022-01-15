import "./App.css";
import PropTypes from "prop-types";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import { Features } from "./components/features/features";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
