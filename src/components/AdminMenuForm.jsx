// NPM package
import { useState } from "react";

// Project files
import form from "../data/categoryForm.json";
import { createDocument, updateDocument } from "../scripts/fireStore";
import InputField from "./InputField";

export default function AdminMenuForm() {
  const [menus, setMenus] = useState([]);

  // Local state
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
  }
  async function onUpdate(data) {
    await updateDocument(path, data);

    const clonedCategory = [...menus];
    const index = clonedCategory.findIndex((item) => item.id === data.id);

    clonedCategory[index] = data;
    setMenus(clonedCategory);
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
      <button>Submit</button>
    </form>
  );
}
