import { useState } from "react";

import form from "../data/productForm.json";
import { createDocument } from "../scripts/fireStore";
import InputField from "../components/InputField";
import { useParams } from "react-router-dom";

export default function AdminProductAdd() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const { categoryId } = useParams();
  const path = `menus/${categoryId}/content/`;

  async function onCreate(event) {
    event.preventDefault();

    const newProduct = {
      name: name,
      price: price,
      imageURL: imageURL,
      description: description,
      ingredients: ingredients,
    };

    const documentId = await createDocument(path, newProduct);
    newProduct.id = documentId;
    setList([...list, newProduct]);
  }
  return (
    <form onSubmit={onCreate}>
      <h2>Add a new Product</h2>
      <InputField setup={form.name} state={[name, setName]} />
      <InputField setup={form.price} state={[price, setPrice]} />
      <InputField setup={form.imageURL} state={[imageURL, setImageURL]} />
      <InputField
        setup={form.description}
        state={[description, setDescription]}
      />
      <InputField
        setup={form.ingredients}
        state={[ingredients, setIngredients]}
      />
      <button className="button_primary">Submit</button>
    </form>
  );
}
