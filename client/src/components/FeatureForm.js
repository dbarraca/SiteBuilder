import './css/Feature.scss';
import FeatureImg from './img/Placeholder2.svg';

const FeatureForm = () => {
    return (
        <div className="feature">
            <div className="feature-text">
                <input className="feature-heading heading" type="text" placeholder="Feature"/>

                <textarea className="feature-message message text-input"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed tempus urna et pharetra pharetra massa massa ultricies mi."
                />
            </div>

            <img className="feature-image" src={FeatureImg} alt="img placeholder"/>
        </div>
    )
}

export default FeatureForm;