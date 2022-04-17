export default function Form() {
  return (
    <form className="contact_form">
      <textarea
        id="message"
        placeholder="Write your message and we will get back to you as soon as possible ..."
      ></textarea>
      <input id="name" placeholder="Enter email or Phone number"></input>
      <button id="button">Submit</button>
    </form>
  );
}
