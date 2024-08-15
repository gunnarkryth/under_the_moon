import { useState } from "react";
import "./assets/styles/App.css";
import { Gallery } from "./assets/components/Gallery";

function App() {
  const [count, setCount] = useState(0);
  const images = [
    `img1.jpg`,
    `img2.jpg`,
    `img3.jpg`,
    `img4.jpg`,
    `img5.jpg`,
    `img6.jpg`,
    `img7.jpg`,
    `img8.jpg`,
    `img9.jpg`,
    `img10.jpg`,
    `img11.jpg`,
    `img12.jpg`,
  ];

  return (
    <>
      <Gallery Gallery_images={images} />
    </>
  );
}

export default App;
