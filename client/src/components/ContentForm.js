import './css/Section.scss';
import './css/ContentForm.scss';
import HeroForm from './HeroForm';
import CardsForm from './CardsForm';
import TestimonialForm from './TestimonialForm';
import Socials from './Socials';
import CTA from './CTA';
import Pricing from './Pricing';
import FeatureForm from './FeatureForm';
import Email from './Email';
import About from './About';
import Navbar from './Navbar';

const ContentForm = ({ section, index, onMoveUp, onMoveDown, onDelete }) => {
    let content;

    switch (section.type) {
        case "navbar":
            content = <Navbar />;
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
            content = <Socials />;
            break;
        case "cta":
            content = <CTA />;
            break;
        case "pricing":
            content = <Pricing />;
            break;
        case "feature":
            content = <FeatureForm />;
            break;
        case "email":
            content = <Email />;
            break;
        case "about":
            content = <About />;
            break;
        default:
            content = <p>{section.type}</p>;
    }

    return (
        <section className={`${section.type}-section`}>
            
            <div className="content content-form">
                {content}
            </div>

            <div className="section-edit">
                <button className="delete-section" onClick={(sectionId) => onDelete(section._id)}>X</button>
                <button onClick={(sectionId) => onMoveUp(section._id)}>Up</button>
                <button onClick={(sectionId) => onMoveDown(section._id)}>Down</button>
            </div>
        </section>
    );
}

export default ContentForm;