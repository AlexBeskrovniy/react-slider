import { useState } from 'react'
import './App.scss'
import Slider from './components/Slider/Slider';

const sliderConfig = {
    autoplay: false,
    arrows: false,
    dots: false,
}

const items: JSX.Element[] = [];

for (let i = 0; i < 5; i++) {
  items.push(<h1 key={i}>Slide {i}</h1>)
}

function App() {

  return (
    <div className="App">
      <Slider config={sliderConfig}>
        { items }
      </Slider>
    </div>
  )
}

export default App
