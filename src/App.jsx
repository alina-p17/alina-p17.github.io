import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
