import Hero from './Hero';
import Cards from './Cards';
import Testimonial from './Testimonial';
import Socials from './Socials';
import CTA from './CTA';
import Pricing from './Pricing';
import Feature from './Feature';
import Email from './Email';
import About from './About';
import Navbar from './Navbar';

const Content = ({ type }) => {
    let content;

    switch (type) {
        case "navbar":
            content = <Navbar />;
            break;
        case "hero":
            content = <Hero />;
            break;
        case "cards":
            content = <Cards />;
            break;
        case "testimonial":
            content = <Testimonial />;
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
            content = <Feature />;
            break;
        case "email":
            content = <Email />;
            break;
        case "about":
            content = <About />;
            break;
        default:
            content = <p>{type}</p>;
    }

    return (

        <div className="content">
            {content}
        </div>

    );
}

export default Content;