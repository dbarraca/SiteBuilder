import './css/Testimonial.scss'
import Person from './img/Person2.svg';

const TestimonialForm = () => {
    return (
        <div className="testimonial">
            <img className="testimonial-thumbnail" src={Person} alt="testimonial icon"/>

            <div>
                <textarea className="quote"
                placeholder='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed tempus urna et pharetra pharetra massa massa ultricies mi."'
                />

                <input className="quote-name" type="text" placeholder="Firstname Lastname, company"/>
            </div>
        </div>
    )
}

export default TestimonialForm;