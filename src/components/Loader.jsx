import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "../components/Navigation";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Menu from "../pages/Menu";

export default function Loader() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
