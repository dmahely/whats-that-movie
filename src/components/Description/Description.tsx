import image from '../../assets/movie_night.svg'
import './Description.css'

const Description = () => {
    return (
        <div className="Description">
            <h1 className="h1">
                What's that movie?
            </h1>
            <p className="description">
                Have you ever blanked on the name of a movie while you were talking about it but could recite each of the cast members names? This website was built to help you with that.
            </p>

            <img alt="Movie night" className="hero-image" src={image} />
        </div>
    );
}

export default Description;