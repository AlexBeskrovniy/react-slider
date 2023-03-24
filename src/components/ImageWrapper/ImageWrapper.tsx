import './ImageWrapper.scss';

interface ImageProps {
    src: string
}

const ImageWrapper = ({ src }: ImageProps) => {
    return (
        <div className="wrapper">
            <img src={src} alt={"image"}/>
        </div>
    );
}

export default ImageWrapper;