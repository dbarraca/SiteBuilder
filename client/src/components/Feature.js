import './css/Feature.scss';
import FeatureImg from './img/Placeholder2.svg';

const Feature = () => {
    return (
        <div className="feature">
            <div className="feature-text">
                <h2 className="feature-heading">Feature</h2>

                <p className="feature-message">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed 
                    tempus urna et pharetra pharetra massa massa ultricies mi.
                </p>
            </div>

            <img className="feature-image" src={FeatureImg} alt="img placeholder"/>
        </div>
    )
}

export default Feature;