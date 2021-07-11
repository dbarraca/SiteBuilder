import "./css/SiteBuilder.scss";
// import { useState } from 'react';
// import Section from './Section';
import ContentForm from './ContentForm';
import AddSection from './AddSection';


const SiteBuilder = ({ sectionOptions, sections, onAdd, onMoveUp, onMoveDown, onDelete }) => {

    return (
        <div className="site-builder">

            {sections && sections.sort((sect1, sect2) => { return sect1.order - sect2.order }).map((section, index) => (
                <ContentForm key={index} section={section} index={index}
                 onMoveUp={onMoveUp} onMoveDown={onMoveDown} onDelete={onDelete}/>
            ))}

            {/* <Section key={index} type={section.type} /> */}

            <AddSection sectionOptions={sectionOptions} onAdd={onAdd}/>
        </div>
    )
}

export default SiteBuilder;