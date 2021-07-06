import './css/Feature.scss';
import Twitter from './img/twitter.svg';

const Feature = () => {
    return (
        <div className="feature">
            <div className="feature-text">
                <h2>Feature</h2>

                <p className="feature-message">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed 
                    tempus urna et pharetra pharetra massa massa ultricies mi.
                </p>
            </div>

            <img className="feature-image" src={Twitter} alt="img placeholder"/>
        </div>
    )
}

export default Feature;