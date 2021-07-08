import './css/Section.scss';
import './css/ContentForm.scss';
// import Hero from './Hero';
import CardsForm from './CardsForm';
import TestimonialForm from './TestimonialForm';
// import Socials from './Socials';
// import CTA from './CTA';
// import Pricing from './Pricing';
import FeatureForm from './FeatureForm';
// import Email from './Email';
// import About from './About';
// import Navbar from './Navbar';

const ContentForm = ({ type }) => {
    let content;

    switch (type) {
        // case "navbar":
        //     content = <Navbar />;
        //     break;
        // case "hero":
        //     content = <Hero />;
        //     break;
        case "cards":
            content = <CardsForm />;
            break;
        case "testimonial":
            content = <TestimonialForm />;
            break;
        // case "socials":
        //     content = <Socials />;
        //     break;
        // case "cta":
        //     content = <CTA />;
        //     break;
        // case "pricing":
        //     content = <Pricing />;
        //     break;
        case "feature":
            content = <FeatureForm />;
            break;
        // case "email":
        //     content = <Email />;
        //     break;
        // case "about":
        //     content = <About />;
        //     break;
        default:
            content = <p>{type}</p>;
    }

    return (
        <section class={`${type}-section`}>
            <div className="content content-form">
                {content}
            </div>
        </section>
    );
}

export default ContentForm;