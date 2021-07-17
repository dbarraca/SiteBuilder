import './css/Hero.scss';
import HeroImg from './img/Placeholder2.svg';
import NavbarForm from './NavbarForm';

const HeroForm = ({ heading }) => {
    return (
        <>
            <NavbarForm />

            <div className="hero">
                <div className="hero-text">
                {/* value={heading} */}
                    <input className="heading" type="text" placeholder="Hero Message"/>

                    <textarea className="hero-message message text-input"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Nec feugiat in fermentum posuere urna nec tincidunt. Ut etiam sit amet nisl purus in mollis. Cursus mattis molestie a iaculis at erat. Dolor magna eget est lorem ipsum dolor sit amet."
                    />
                </div>

                <img className="hero-image" src={HeroImg} alt="dashed square"/>
            </div>
        </>
    )
}

export default HeroForm;