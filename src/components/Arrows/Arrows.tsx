import './Arrows.scss';

interface IArrows {
    changeSlide: (direction: number) => void
}

const Arrows = (props: IArrows) => {
    return (
        <div className="arrows">
            <div className="slide-prev" onClick={() => props.changeSlide(-1)}>
                <span className="icon"></span>
            </div>
            <div className="slide-next" onClick={() => props.changeSlide(1)}>
                <span className="icon"></span>
            </div>
        </div>
    );
}

export default Arrows;