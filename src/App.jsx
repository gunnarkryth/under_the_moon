import { useState } from "react";
import { Footer } from "./assets/components/Footer/Footer"
import { Preview } from "./assets/components/Preview/Preview";
import { Header } from "./assets/components/Header";
import { Gallery } from "./assets/components/Gallery";

import "./assets/styles/App.css";

function App() {
  const [count, setCount] = useState(0);
  
  const previewHT1 = 'One 2 One'
  const previewHT2 = 'Loyalty Free'
  const previewT = 'Lorem ipsum dolor sit amet consectetur. Nunc pellentesque senectus aliquam ipsum. Sed mauris posuere odio nisl in. Massa vitae faucibus imperdiet facilisi pulvinar maecenas platea purus pulvinar. Lacinia imperdiet nisi nunc vel ut convallis a est scelerisque'
  const previewB1 = 'Book tid'
  const previewB2 = 'Læs mere'
  
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
    
      <Preview previewHeaderText1 = {previewHT1} previewHeaderText2 = {previewHT2} previewText = {previewT} previewButton1 = {previewB1} previewButton2 = {previewB2} />
    
      <Gallery Gallery_images={images} />

      <About aboutHeaderText = {aboutHT} aboutParagraphText = {aboutPT} aboutButtonText = {aboutBT}/>
      
      <Footer/>
    </>
  );
}

export default App;
