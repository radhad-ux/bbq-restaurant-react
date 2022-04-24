//NPM Package
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Project files
import Navigation from "./components/Navigation";
import Admin from "./pages/Admin";
import AdminCategory from "./pages/AdminCategory";
import AdminProduct from "./pages/AdminProduct";
import AdminProductAdd from "./pages/AdminProductAdd";
import Contact from "./pages/Contact";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Product from "./pages/Product";
import "./styles/style.css";

export default function App() {
  return (
    <div className="App">
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
      </BrowserRouter>
    </div>
  );
}
