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

const ContentForm = ({ section, index, onMoveUp, onMoveDown, onDelete }) => {
    let content;

    switch (section.type) {
        case "navbar":
            content = <NavbarForm />;
            break;
        case "hero":
            content = <HeroForm heading={section.heading}/>;
            break;
        case "cards":
            content = <CardsForm />;
            break;
        case "testimonial":
            content = <TestimonialForm />;
            break;
        case "socials":
            content = <SocialsForm />;
            break;
        case "cta":
            content = <CTAForm />;
            break;
        case "pricing":
            content = <PricingForm />;
            break;
        case "feature":
            content = <FeatureForm />;
            break;
        case "email":
            content = <EmailForm />;
            break;
        case "about":
            content = <AboutForm />;
            break;
        default:
            content = <p>{section.type}</p>;
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

            <div className="content content-form">
                {content}
            </div>

            <div className="delete-wrap">
                <button className="delete-section section-button" onClick={(sectionId) => onDelete(section._id)}>
                    <img src={Close} alt="Close Icon"/>
                </button>
            </div>
        </section>
    );
}

export default ContentForm;