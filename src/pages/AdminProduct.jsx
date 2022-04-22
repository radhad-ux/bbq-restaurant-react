import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCollection, getDocument } from "../scripts/fireStore";

import ProductCard from "../components/ProductCard";

export default function AdminProduct() {
  const { id } = useParams();

  const [document, setDocument] = useState({});
  const [list, setList] = useState([]);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    async function loadData() {
      const documentData = await getDocument("menus", id);
      const listData = await getCollection(`menus/${id}/content/`);

      setDocument(documentData);
      setList(listData);
      setStatus(1);
    }
    loadData();
  }, []);

  const ProductList = list.map((item) => (
    <Link to={`/menu/${id}/${item.id}`} key={item.id}>
      <ProductCard key={item.id} item={item} />
    </Link>
  ));

  if (status === 0) return <p>Loading...</p>;

  return (
    <div className="admin_page">
      <header className="admin_header">
        <img src={document.imageURL} alt="category item" />
        <h1>{document.name}</h1>
      </header>
      <section className="menu_list">{ProductList}</section>
      <div className="admin-add">
        <Link to="/update/new-product" className="button_primary" id="btn_add">
          Add product
        </Link>
      </div>
    </div>
  );
}
