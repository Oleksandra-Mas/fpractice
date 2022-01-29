import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { Container } from "./components/Container";

const Hero = lazy(() => import("./components/hero/Hero"));
const Features = lazy(() => import("./components/features/features"));
const About = lazy(() => import("./components/About/About"));
const AboutSecondary = lazy(() => import("./components/About/AboutSecondary"));
const Review = lazy(() => import("./components/Review/Review"));

function App() {
  return (
    <Container>
      <Header />
      <Suspense fallback="null">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="feuters" element={<Features />} />
          <Route path="about" element={<About />}>
            <Route path="guide" element={<AboutSecondary />} />
          </Route>
          <Route path="review" element={<Review />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
