import Cards from './Cards';
import Testimonial from './Testimonial';
import Socials from './Socials';

const Content = ({ type }) => {
    let content;

    switch (type) {
        case "cards":
            content = <Cards/>;
            break;
        case "testimonial":
            content = <Testimonial/>;
            break;
        case "socials":
            content = <Socials/>;
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