import { useEffect, useState } from "react";
import { getCollection } from "../scripts/fireStore";

import MenuCard from "../components/MenuCard";

export default function Menu() {
  const [menus, setMenus] = useState([]);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    async function loadData(path) {
      const data = await getCollection(path);
      setMenus(data);
      setStatus(1);
    }
    loadData("menus");
  }, []);

  const Category = menus.map((item) => <MenuCard key={item.id} item={item} />);

  if (status === 0) return <p>Loading...</p>;
  if (status === 2) return <p>Error</p>;

  return (
    <div className="menu_page">
      <section className="hero">
        <h1>Menu</h1>
      </section>
      <section className="menu_list">{Category}</section>
    </div>
  );
}
