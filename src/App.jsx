import { useState } from "react";
import "./assets/styles/style.css";

import { About } from "./assets/components/About/About"

function App() {
  
  const aboutHT = 'Under the Moon - New Style' 
  const aboutPT = 'Lorem ipsum dolor sit amet consectetur. Orci elementum ullamcorper feugiat vitae faucibus. Sodales neque quisque sodales etiam tortor ut praesent. Id luctus tincidunt aenean molestie pellentesque. Viverra sit aliquam faucibus volutpat lectus sed eu euismod. Suspendisse augue ipsum pellentesque sagittis nunc. Maecenas mattis neque orci bibendum quam faucibus amet platea congue. Amet condimentum faucibus ultrices nunc varius nisl viverra vivamus amet. Habitant dictum fermentum vitae proin ut. Eu faucibus molestie lacus porttitor sed pellentesque turpis in. Aliquam'
  const aboutBT = 'Læs mere'

  return (
    <>
      <About aboutHeaderText = {aboutHT} aboutParagraphText = {aboutPT} aboutButtonText = {aboutBT}/>
    </>
  );
}

export default App;
