import { useState } from "react";
import "./assets/styles/App.css";
import { Header } from "./assets/components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header title="Under The Moon" />
    </>
  );
}

export default App;
