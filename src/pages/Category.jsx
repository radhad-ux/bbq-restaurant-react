import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCollection, getDocument } from "../scripts/fireStore";

import ProductCard from "../components/ProductCard";

export default function Category() {
  const { categoryId } = useParams();

  const [document, setDocument] = useState({});
  const [list, setList] = useState([]);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    async function loadData() {
      const documentData = await getDocument("menus", categoryId);
      const listData = await getCollection(`menus/${categoryId}/content/`);

      setDocument(documentData);
      setList(listData);
      setStatus(1);
    }
    loadData();
  }, []);

  const ProductList = list.map((item) => (
    <Link to={`/menu/${categoryId}/${item.id}`} key={item.id}>
      <ProductCard key={item.id} item={item} />
    </Link>
  ));

  if (status === 0) return <p>Loading...</p>;

  return (
    <div className="category_page">
      <section className="hero">
        <img src={document.imageURL} alt="category item" />
        <h1>{document.name}</h1>
      </section>

      <section className="menu_list">{ProductList}</section>
    </div>
  );
}
