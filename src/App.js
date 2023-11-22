import React from "react";
import { BrowserRouter as Router, Route, Routes, link } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./components/Home";
import Products from "./components/Products";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import './App.css'
import SignIn from "./components/SignIn";
import FooterComponent from "./components/FooterComponent";

import ToggleTheme from "./components/ToggleTheme";

const App = () => {
  return (
    <>
      <Router>
        <NavbarComponent />
        <ToggleTheme>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ToggleTheme>
        <FooterComponent />
      </Router>

    </>
  );
};

export default App;
