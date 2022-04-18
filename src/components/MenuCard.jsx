import { Link } from "react-router-dom";

export default function MenuCard({ item }) {
  const { id, name, description, imageURL } = item;

  return (
    <section className="menu_card">
      <Link to={`/menu/${id}`}>
        <div className="card_image">
          <img src={imageURL} alt="Card" />
        </div>
        <div className="description">
          <h2 className="card_header">{name}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </section>
  );
}
