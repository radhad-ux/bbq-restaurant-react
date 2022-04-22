import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Admin from "../pages/Admin";
import AdminCategory from "../pages/AdminCategory";
import AdminProduct from "../pages/AdminProduct";
import AdminProductAdd from "../pages/AdminProductAdd";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Category from "../pages/Category";
import Product from "../pages/Product";

export default function Loader() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu/:categoryId" element={<Category />} />
        <Route path="/menu/:categoryId/:productId" element={<Product />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="admin/update/:id" element={<AdminCategory />} />
        <Route path="admin/product/:id" element={<AdminProduct />} />
        <Route path="/update/:id" element={<AdminProductAdd />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
