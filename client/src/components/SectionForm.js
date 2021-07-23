import './css/Section.scss';
import './css/ContentForm.scss';
import HeroForm from './HeroForm';
import CardsForm from './CardsForm';
import TestimonialForm from './TestimonialForm';
import SocialsForm from './SocialsForm';
import CTAForm from './CTAForm';
import PricingForm from './PricingForm';
import FeatureForm from './FeatureForm';
import EmailForm from './EmailForm';
import AboutForm from './AboutForm';
import NavbarForm from './NavbarForm';

import ArrowUp from "./img/ArrowUp.svg";
import ArrowDown from "./img/ArrowDown.svg";
import Close from "./img/x.svg";

const SectionForm = ({ section, onMoveUp, onMoveDown, onDelete }) => {
    let sectionForm;

    switch (section.type) {
        case "navbar":
            sectionForm = <NavbarForm />;
            break;
        case "hero":
            sectionForm = <HeroForm heading={section.heading}/>;
            break;
        case "cards":
            sectionForm = <CardsForm />;
            break;
        case "testimonial":
            sectionForm = <TestimonialForm />;
            break;
        case "socials":
            sectionForm = <SocialsForm />;
            break;
        case "cta":
            sectionForm = <CTAForm />;
            break;
        case "pricing":
            sectionForm = <PricingForm />;
            break;
        case "feature":
            sectionForm = <FeatureForm />;
            break;
        case "email":
            sectionForm = <EmailForm />;
            break;
        case "about":
            sectionForm = <AboutForm />;
            break;
        default:
            sectionForm = <p>{section.type}</p>;
    }

    return (
        <section className={`${section.type}-section`}>
            <div className="section-move">
                <button className="arrow-button section-button" onClick={(sectionId) => onMoveUp(section)}>
                    <img src={ArrowUp} alt="Up Arrow"/>
                </button>
                <button className="arrow-button section-button" onClick={(sectionId) => onMoveDown(section._id)}>
                    <img src={ArrowDown} alt="Down Arrow"/>
                </button>
            </div>

            <div className="section section-form">
                {sectionForm}
            </div>

            <div className="delete-wrap">
                <button className="delete-section section-button" onClick={(sectionId) => onDelete(section._id)}>
                    <img src={Close} alt="Close Icon"/>
                </button>
            </div>
        </section>
    );
}

export default SectionForm;