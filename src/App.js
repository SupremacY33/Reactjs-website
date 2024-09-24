import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from "./pages/navbar";
import Con from "./pages/content";
import Foot from "./pages/footer";
import NewsPage from "./pages/news";
import Contact from "./pages/contact"
import AboutUs from "./pages/about"
import LoggingIn from "./pages/login"
import Registration from "./pages/register"

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Con />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<LoggingIn />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
        <Foot />
      </div>
    </Router>
  );
}

export default App;