import MainButton from '../../components/MainButton/MainButton';
import './Hero.css';

const Hero = () => {
    return (
        <>
            <div className="main-hero">
                <div className="hero-text">
                    <p className="hero-subtitle">Welcome To Cyborg</p>
                    <h1 className="hero-title"><span>BROWSE</span> OUR POPULAR GAMES HERE</h1>
                </div>
                <MainButton LinkTo = "browse.html">Browse Now</MainButton>
            </div>
        </>
    )
}
export default Hero;