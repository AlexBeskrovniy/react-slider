import './App.scss'
import Slider from './components/Slider/Slider';
import ImageWrapper from './components/ImageWrapper/ImageWrapper';

const sliderConfig = {
    loop: false,
    autoplay: false,
    arrows: true,
    dots: false,
}

const sources: string[] = ['images/arch.jpg', 'images/behemoth.jpg', 'images/children_of_bodom.jpg', 'images/cob.jpg', 'images/metallica.jpg'];

const slides: JSX.Element[] = sources.map(src => {
    return (
      <div className="slide" key={src}>
        <ImageWrapper key={src} src={src} />
      </div>
    );
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
