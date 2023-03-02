import { ReactNode, useState } from 'react';
import './Slider.scss';
import Arrows from '../Arrows/Arrows';

interface IConfig {
    loop: boolean;
    autoplay: boolean;
    arrows: boolean;
    dots: boolean;
}

interface ISlider {
    slides: JSX.Element[];
    config: IConfig;
}

const Slider = ({ config, slides }: ISlider) => {
    const [current, setCurrent] = useState(0);
    const [loop, setLoop] = useState(config.loop);

    const slidesCount = slides.length
    const firstIndexEl = slides.at(0)
    const lastIndexEl = slides.at(-1); 

    //Not implemented
    const handleLoop = (direction: number) => {
        switch (direction) {
            case 1:
                const first: any = slides.shift();
                slides.push(first)
                break;
            case -1:
                console.log('back');
                console.log(direction);
                break;
        }
    }

    const changeSlide = (direction: number) => {
        let slide;
        if (current + direction > slidesCount) {
            slide = 0;
        } else if (current + direction < 0) {
            slide = slidesCount - 1
        } else {
            slide = (current + direction) % slidesCount
        }

        setCurrent(slide);

        loop && handleLoop(direction);
    }

    return (
        <div className="slider">
            <div className="slider-track" style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides.map((slide, i) => (
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