import { useState } from "react";
import { Footer } from "./assets/components/Footer/Footer"
import { Preview } from "./assets/components/Preview/Preview";
import { Header } from "./assets/components/Header";
import { Gallery } from "./assets/components/Gallery";
import { About } from "./assets/components/About/About";

import "./assets/styles/App.css";

function App() {  
  const previewHT1 = 'One 2 One'
  const previewHT2 = 'Loyalty Free'
  const previewT = 'Lorem ipsum dolor sit amet consectetur. Nunc pellentesque senectus aliquam ipsum. Sed mauris posuere odio nisl in. Massa vitae faucibus imperdiet facilisi pulvinar maecenas platea purus pulvinar. Lacinia imperdiet nisi nunc vel ut convallis a est scelerisque'
  const previewB2 = 'Læs mere'
  const aboutHT = 'Under the Moon - New Style' 
  const aboutPT = 'Lorem ipsum dolor sit amet consectetur. Orci elementum ullamcorper feugiat vitae faucibus. Sodales neque quisque sodales etiam tortor ut praesent. Id luctus tincidunt aenean molestie pellentesque. Viverra sit aliquam faucibus volutpat lectus sed eu euismod. Suspendisse augue ipsum pellentesque sagittis nunc. Maecenas mattis neque orci bibendum quam faucibus amet platea congue. Amet condimentum faucibus ultrices nunc varius nisl viverra vivamus amet. Habitant dictum fermentum vitae proin ut. Eu faucibus molestie lacus porttitor sed pellentesque turpis in. Aliquam'
  const readMore = 'Læs mere'
  
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
    
      <About aboutHeaderText = {aboutHT} aboutParagraphText = {aboutPT} aboutButtonText = {readMore}/>

      <Preview previewHeaderText1 = {previewHT1} previewHeaderText2 = {previewHT2} previewText = {previewT} previewButton1 = {readMore} previewButton2 = {previewB2} />
    
      <Gallery Gallery_images={images} />

      <Footer/>
    </>
  );
}

export default App;
