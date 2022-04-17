//Project files
import { getCollection } from "../scripts/fireStore";

export default function Menu() {
  getCollection("menus");

  return (
    <div className="menu_page">
      <section className="hero">
        <h1>Menu</h1>
      </section>
    </div>
  );
}
