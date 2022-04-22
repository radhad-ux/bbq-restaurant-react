import { Link } from "react-router-dom";

export default function AdminCard({ item, to, onDelete }) {
  const { id, name, imageURL, description } = item;

  return (
    <section className="menu_card">
      <div className="card_image">
        <img src={imageURL} alt="Dish thumbnail" />
      </div>
      <div className="description">
        <Link className="button_details" to={to}>
          <h2 className="card_header">{name}</h2>
        </Link>
        <p>{description}</p>
        <button onClick={() => onDelete(id)} id="btn_delete">
          Delete
        </button>
      </div>
    </section>
  );
}
