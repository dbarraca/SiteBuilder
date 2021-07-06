import './css/Testimonial.scss'
import Person from './img/Person2.svg';

const Testimonial = () => {
    return (
        <div className="testimonial">
            <img className="testimonial-thumbnail" src={Person} alt="testimonial icon"/>

            <div>
                <p className="quote">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed 
                    tempus urna et pharetra pharetra massa massa ultricies mi."
                </p>

                <p className="quote-name">Firstname Lastname, company</p>
            </div>
        </div>
    )
}

export default Testimonial;