import AdminCard from "../components/AdminCard";
import { useEffect, useState } from "react";
import { getCollection, deleteDocument } from "../scripts/fireStore";
import { Link } from "react-router-dom";

export default function Admin() {
  const [menus, setMenus] = useState([]);
  const [status, setStatus] = useState(0);
  const path = "menus";

  useEffect(() => {
    async function loadData(path) {
      const data = await getCollection(path);
      setMenus(data);
      setStatus(1);
    }
    loadData("menus");
  }, []);

  async function onDelete(id) {
    await deleteDocument(path, id);

    const clonedMenus = [...menus];
    const index = clonedMenus.findIndex((item) => item.id === id);

    clonedMenus.splice(index, 1);
    setMenus(clonedMenus);
  }

  if (status === 0) return <p>Loading...</p>;
  if (status === 2) return <p>Error</p>;

  const MenuItems = menus.map((item) => (
    <AdminCard
      key={item.id}
      item={item}
      onDelete={onDelete}
      to={`product/${item.id}`}
    />
  ));

  return (
    <div className="admin_page">
      <header className="admin_header">
        <h1>Welcome to Admin Page</h1>
        <p>
          Here you can add, edit or delete the restaurant menu categories and
          products
        </p>
      </header>
      <section className="menu_list">{MenuItems}</section>
      <div className="admin-add">
        <Link
          to="update/new-category"
          className="button_primary"
          id="button-add"
        >
          Add category
        </Link>
      </div>
    </div>
  );
}
