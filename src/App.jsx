import { useState } from "react";
// import "./src/assets/styles/style.css";

import { Preview } from "./assets/components/Preview/Preview";

function App() {

  const previewHT1 = 'One 2 One'
  const previewHT2 = 'Loyalty Free'
  const previewT = 'Lorem ipsum dolor sit amet consectetur. Nunc pellentesque senectus aliquam ipsum. Sed mauris posuere odio nisl in. Massa vitae faucibus imperdiet facilisi pulvinar maecenas platea purus pulvinar. Lacinia imperdiet nisi nunc vel ut convallis a est scelerisque'
  const previewB1 = 'Book tid'
  const previewB2 = 'Læs mere'
  

  return (
    <>
      <Preview previewHeaderText1 = {previewHT1} previewHeaderText2 = {previewHT2} previewText = {previewT} previewButton1 = {previewB1} previewButton2 = {previewB2} />
    </>
  );
}

export default App;
