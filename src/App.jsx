import { useState } from "react";
import "./assets/styles/App.css";
import { Header } from "./assets/components/Header";
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
      <Header title="Under The Moon" />
      <Gallery Gallery_images={images} />

      <About aboutHeaderText = {aboutHT} aboutParagraphText = {aboutPT} aboutButtonText = {aboutBT}/>
    </>
  );
}

export default App;
