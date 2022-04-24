export default function DetailsCard({ item }) {
  const { name, price, ingredients, description, imageURL } = item;
  const IngredientsList = ingredients.map((data, index) => (
    <span key={index}>{data}</span>
  ));

  return (
    <section className="product_card">
      <div className="product_image">
        <img src={imageURL} alt="Card" />
      </div>
      <div className="product_description">
        <h2 className="product_header">{name}</h2>
        <p>Price:{price}</p>
        <p className="text">{description}</p>
        <section className="ingredients">
          <p>Ingredients:</p>
          {IngredientsList}
        </section>
      </div>
    </section>
  );
}
