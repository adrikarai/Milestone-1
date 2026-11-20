import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import "../assets/css/style.css";

import Header from "./Common/Header";
import Footer from "./Common/Footer";
import Home from "./Home";
import Menu from "./Menu.jsx";
import Gallery from "./Gallery.jsx";
import Contact from "./Contact.jsx";

export default function Web() {
    return (
        <BrowserRouter>

            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            <Footer />

        </BrowserRouter>
    );
}
