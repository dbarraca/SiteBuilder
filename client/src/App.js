import './App.css';
import Section from './components/Section'

function App() {
  return (
    <div className="App">
      <Section type="landing-page"/>
      <Section type="testimonials"/>
      <Section type="socials"/>
      <Section type="about"/>
      <Section type="cards"/>
      <Section type="image-text"/>
      <Section type="purchase-options"/>
      <Section type="cta"/>
      <Section type="contact"/>
      <Section type="email-form"/>
      <Section type="footer"/>
    </div>
  );
}

export default App;
