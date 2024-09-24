// src\App.js
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//const Home = () => import("./pages/Home");
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
//const Menu = () => import("./pages/Menu");
//const About = () => import("./pages/About");
//const Contact = () => import("./pages/Contact");

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/menu" exact element={<Menu />} />
              <Route path="/about" exact element={<About />} />
              <Route path="/contact" exact element={<Contact />} />
            </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;