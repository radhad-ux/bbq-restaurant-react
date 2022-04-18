export default function ProductCard({ item }) {
  const { name, price, imageURL } = item;
  return (
    <section className="menu_card">
      <div className="card_image">
        <img src={imageURL} alt="Card" />
      </div>
      <div className="description">
        <h2 className="card_header">{name}</h2>
        <p>Price:{price}</p>
      </div>
    </section>
  );
}
