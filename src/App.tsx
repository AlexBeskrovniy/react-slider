import { useState } from 'react'
import './App.scss'
import Slider from './components/Slider/Slider';

const sliderConfig = {
    loop: true,
    autoplay: false,
    arrows: false,
    dots: false,
}

const slides: JSX.Element[] = [];

for (let i = 0; i < 5; i++) {
  slides.push(<h1 key={i}>Slide {i}</h1>)
}

function App() {

  return (
    <div className="App">
      <Slider config={sliderConfig} slides={slides} />
    </div>
  )
}

export default App
