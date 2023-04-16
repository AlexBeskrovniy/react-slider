import { useState } from 'react';
import './Slider.scss';
import Arrows from '../Arrows/Arrows';

interface SliderConfig {
    loop: boolean;
    autoplay: boolean;
    arrows: boolean;
    dots: boolean;
}

interface SliderProps {
    slides: JSX.Element[];
    config: SliderConfig;
}

const Slider = ({ config, slides }: SliderProps) => {
    const [current, setCurrent] = useState(0);
    

    const slidesCount = slides.length
    const firstIndexEl = slides.at(0)
    const lastIndexEl = slides.at(-1);

    const changeSlide = (direction: number) => {
        setCurrent((current + direction) % slidesCount);
        //Maybe need for loop implementation
        // let slide;
        // if (current + direction > slidesCount) {
        //     slide = 0;
        // } else if (current + direction < 0) {
        //     slide = slidesCount - 1
        // } else {
        //     slide = (current + direction) % slidesCount
        // }

        // setCurrent(slide);
    }

    return (
        <div className="slider">
            <div className="slider-track" style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides}
            </div>
            {config.arrows && <Arrows current={current} slidesCount={slidesCount - 1} changeSlide={changeSlide} />}
        </div>
    );
}

export default Slider;