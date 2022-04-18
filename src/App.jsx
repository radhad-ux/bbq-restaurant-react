import { useState } from "react";
import Loader from "./components/Loader";
import "./styles/style.css";

export default function App() {
  const [status, setStatus] = useState(1);

  return (
    <div className="App">
      {status === 0 && <p>Loading</p>}
      {status === 1 && <Loader />}
      {status === 2 && <p>Error Loading</p>}
    </div>
  );
}
