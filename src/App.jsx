import { useState } from "react";
import "./assets/styles/App.css";
import { Gallery } from "./assets/components/Gallery";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Gallery />
    </>
  );
}

export default App;
