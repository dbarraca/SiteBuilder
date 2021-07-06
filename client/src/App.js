import Section from './components/Section'

function App() {
  return (
    <div className="App">
      <Section type="hero"/>
      <Section type="cards"/>
      <Section type="feature"/>
      <Section type="testimonial"/>
      <Section type="cta"/>
      <Section type="pricing"/>
      <Section type="about"/>
      <Section type="socials"/>
      <Section type="email"/>
      {/* <Section type="footer"/> */}
    </div>
  );
}

export default App;
