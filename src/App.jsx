// App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("Mohamed Aljazwi");

  return (
    <Router>
      <Header title={title} />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home title={title} />} />
          <Route path="/home" element={<Home title={title} />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer title={title} />
    </Router>
  );
}

export default App;
