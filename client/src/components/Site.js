import "./css/SiteBuilder.scss";
import Section from './Section';

const Site = ({ sections }) => {
    return (
        <div className="site">
            {sections && sections.sort((sect1, sect2) => { return sect1.order - sect2.order }).map((section, index) => (
                <Section key={index} type={section.type}/>
            ))}
        </div>
    )
}

export default Site;