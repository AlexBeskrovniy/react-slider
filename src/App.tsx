import './App.scss'
import Slider from './components/Slider/Slider';
import ImageWrapper from './components/ImageWrapper/ImageWrapper';

const sliderConfig = {
    loop: false,
    autoplay: false,
    arrows: true,
    dots: false,
}

const slides: JSX.Element[] = [];
const sources: string[] = ['images/arch.jpg', 'images/behemoth.jpg', 'images/children_of_bodom.jpg', 'images/cob.jpg', 'images/metallica.jpg'];

sources.map(src => {
  slides.push(<ImageWrapper key={src} src={src} />);
});

function App() {

  return (
    <div className="App">
      <div className='slideshow-wrapper'>
        <Slider config={sliderConfig} slides={slides} />
      </div>
    </div>
  )
}

export default App
