import contactData from "../data/contact.json";
import ContactItem from "../components/ContactItem";
import Form from "../components/Form";
import Map from "../components/Map";
import ContactHero from "../assets/contactnew.jpg";

export default function Contact() {
  const ContactList = contactData.map((item) => (
    <ContactItem key={item.id} item={item} />
  ));

  return (
    <section className="contact_page">
      <header className="contact_main">
        <img
          className="contact_img"
          src={ContactHero}
          alt="People in the restaurant"
        />
        <h1>Contact</h1>
      </header>
      <div className="container">
        <div className="contact_list">{ContactList}</div>
        <Form />
      </div>
      <section className="map-container">
        <Map />
      </section>
    </section>
  );
}
