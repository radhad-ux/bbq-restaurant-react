import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "../components/Navigation";
import Home from "../pages/Home";
import Menu from "../pages/Menu";

export default function Loader() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}
