import './css/Hero.scss';
import HeroImg from './img/Placeholder2.svg';
import Navbar from './Navbar';

const Hero = () => {
    return (
        <>
            <Navbar />

            <div className="hero">
                <div className="hero-text">
                    <h2>Eye-catching headline</h2>

                    <p className="hero-message">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Eget arcu dictum varius duis at consectetur lorem donec. 
                    Quis enim lobortis scelerisque fermentum dui faucibus in 
                    ornare quam.
                    </p>
                </div>

                <img className="hero-image" src={HeroImg} alt="dashed square"/>
            </div>
        </>
    )
}

export default Hero;