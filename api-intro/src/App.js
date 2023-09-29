import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Course from "./pages/Course/Course";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/courses" element={<Course/>} />
        <Route path="/contacts" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
