import './css/CTA.scss';
import './css/CTAForm.scss';

const CTAForm = ({ heading }) => {
    return (
        <div className="cta">
            <input className="heading" type="text" placeholder="Ready to join?" value={heading}/>

            <div className="btn-wrap">
                <button className="button-primary">
                    <input className="text-input" type="text" placeholder="Get Started"/>
                    {/* value="Get Started" */}
                </button>

                <button className="button-secondary">
                    <input className="text-input" type="text" placeholder="Learn More" /> 
                    {/* value="Learn More" */}
                </button>
            </div>
        </div>
    );
}

export default CTAForm;