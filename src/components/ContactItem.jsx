export default function ContactItem({ item }) {
  const { description, imageURL } = item;
  const imageSrc = require(`../assets/images/${imageURL}`);
  return (
    <section className="contact_item">
      <img src={imageSrc} className="contact_image" alt="contact icons" />
      <span>{description}</span>
    </section>
  );
}
