import { useState } from "react";

import form from "../data/productForm.json";
import { createDocument, updateDocument } from "../scripts/fireStore";
import InputField from "../components/InputField";
import { useParams } from "react-router-dom";

export default function AdminProductAdd() {
  const [menus, setMenus] = useState([]);
  const [document, setDocument] = useState({});
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageURL, setImageURL] = useState("");
  const { categoryId } = useParams();
  const path = `menus/${categoryId}/content/`;

  async function onCreate(event) {
    event.preventDefault();

    const newProduct = {
      name: name,
      price: price,
      imageURL: imageURL,
    };
    const documentId = await createDocument(path, newProduct);

    newProduct.id = documentId;
    setList([...list, newProduct]);
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
      <h2>Add a new Product</h2>
      <InputField setup={form.name} state={[name, setName]} />
      <InputField setup={form.price} state={[price, setPrice]} />
      <InputField setup={form.imageURL} state={[imageURL, setImageURL]} />
      <button>Submit</button>
    </form>
  );
}
