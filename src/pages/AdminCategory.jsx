import { useState } from "react";
import { Link } from "react-router-dom";

import InputField from "../components/InputField";
import form from "../data/categoryForm.json";
import { createDocument } from "../scripts/fireStore";
import Arrow from "../assets/arrow-left.png";

export default function AdminCategory() {
  const [menus, setMenus] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const path = "menus";

  async function onCreate(event) {
    event.preventDefault();

    const newCategory = {
      name: name,
      description: description,
      imageURL: imageURL,
    };
    const documentId = await createDocument(path, newCategory);
    newCategory.id = documentId;
    setMenus([...menus, newCategory]);
    setName("");
    setDescription("");
    setImageURL("");
  }
  return (
    <form onSubmit={onCreate}>
      <h2>Add a new Category</h2>
      <InputField setup={form.name} state={[name, setName]} />
      <InputField
        setup={form.description}
        state={[description, setDescription]}
      />
      <InputField setup={form.imageURL} state={[imageURL, setImageURL]} />
      <button className="button_primary">Submit</button>
      <Link to="/admin" className="back_link">
        <img src={Arrow} /> Go Back
      </Link>
    </form>
  );
}
