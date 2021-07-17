import './css/About.scss'

const AboutForm = ({ heading }) => {
    return (
        <div className="about">
            <input className="heading" type="text" placeholder="About Us" value={heading}/>

            <textarea className="message about-message text-input"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Nec feugiat in fermentum posuere urna nec tincidunt. Ut etiam sit amet nisl purus in mollis. Cursus mattis molestie a iaculis at erat. Dolor magna eget est lorem ipsum dolor sit amet."
            />
        </div>
    )
}

export default AboutForm