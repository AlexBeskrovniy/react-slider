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
    return (
        <div className="slider">
            <div className="slider-track">
                {props.children.map((slide, i) => (
                    <div className="slide" key={i} tabIndex={i}>
                        {slide}
                    </div>
                ))}
            </div>
            <Arrows />
        </div>
    );
}

export default Slider;