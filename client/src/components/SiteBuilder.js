import "./css/SiteBuilder.scss";
import { useState } from 'react';
import Section from './Section';
import ContentForm from './ContentForm';
import AddSection from './AddSection';


const SiteBuilder = ({ sectionOptions, sections }) => {

    console.log(sections);

    // const [ sections, setSections ] = useState(
    //     ['hero', 'cards', 'feature', 'testimonial', 'email' ]
    // );

    // const onAddSection = (addedSection) => {
    //     setSections(
    //         [ ...sections, addedSection ]
    //     );
    // }

    return (
        <div className="site-builder">
            {sections.map((section) => (
                // <h1>{section.type}</h1>
                <Section type={section.type} />
            ))}
            {/* {sections.map( (section) => (
                <Section type={section.type} />
            ))} */}

            {/* <ContentForm type="feature" />
            <ContentForm type="testimonial" />
            <ContentForm type="cards" /> */}

            {/* onAddSection={onAddSection} */}

            <AddSection sectionOptions={sectionOptions} />
        </div>
    )
}

export default SiteBuilder;