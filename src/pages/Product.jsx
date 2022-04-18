import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { getCollection, getDocument } from "../scripts/fireStore";
import DetailsCard from "../components/DetailsCard";

export default function Product() {
  const { categoryId, productId } = useParams();

  const [document, setDocument] = useState({});
  const [list, setList] = useState([]);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    async function loadData() {
      //   const documentData = await getDocument("content", productId);
      const data = await getCollection(
        `menus/${categoryId}/content/${productId}/content`
      );

      //   setDocument(documentData);
      setList(data);
      setStatus(1);
    }
    loadData();
  }, []);

  if (status === 0) return <p>Loading...</p>;

  const ProductDetails = list.map((item) => (
    <DetailsCard key={item.id} item={item} />
  ));

  return (
    <div className="product_page">
      {/* <h1>{document.name}</h1> */}
      <section className="product_detail">{ProductDetails}</section>

      <Link to={`/menu/${categoryId}/`} className="button_primary" id="btn">
        Go Back
      </Link>
    </div>
  );
}
