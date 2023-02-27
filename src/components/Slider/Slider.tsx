import { useState } from 'react';
import './Slider.scss';
import Arrows from '../Arrows/Arrows';

interface Config {
    autoplay: boolean;
    arrows: boolean;
    dots: boolean;
}

interface ISlider {
    children: JSX.Element[];
    config: Config;
}

const Slider = (props: ISlider) => {
    const [slide, setSlide] = useState(0);

    const slidesCount = props.children.length

    // const slideTo = (current: number) => {

    // }

    const changeSlide = (direction = 1) => {
        let current;
        if (slide + direction > slidesCount) {
            current = 0;
        } else if (slide + direction < 0) {
            current = slidesCount - 1
        } else {
            current = (slide + direction) % slidesCount
        }

        // slideTo(current);
        setSlide(current);
    }

    return (
        <div className="slider">
            <div className="slider-track" style={{ transform: `translateX(-${slide * 100}%)` }}>
                {props.children.map((slide, i) => (
                    <div className="slide" key={i}>
                        {slide}
                    </div>
                ))}
            </div>
            <Arrows changeSlide={changeSlide}/>
        </div>
    );
}

export default Slider;