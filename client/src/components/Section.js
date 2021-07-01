import './css/Section.scss';
import Content from './Content';

const Section = ({ type }) => {
    return (
        <section class={`${type}-section`}>
            <Content type={type}/>
        </section>
    );
}

export default Section;