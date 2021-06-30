import './css/Section.css';
import Content from './Content';
const Section = ({ type }) => {
    return (
        <section>
            <h1>Section</h1>

            <Content type={type}/>
        </section>
    );
}

export default Section;