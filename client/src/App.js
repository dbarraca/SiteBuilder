// import Section from './components/Section'
import SiteBuilder from './components/SiteBuilder';
import { useState, useEffect } from 'react';

function App() {
  const currSubdomain = "donutshop";

  const sectionOptions = [ "hero", "cards", "feature", "testimonial", "cta",  "pricing", "about", "socials", "email", "footer"];
  const [ site, setSite ] = useState({});

  useEffect(() => {
    const getSite = async () => {
      const siteFromServer = await fetchSite(currSubdomain);

      setSite(siteFromServer);
    }

    getSite();
  },[]);
  
  // Fetch site
  const fetchSite = async (subdomain) => {
      const API = process.env.NODE_ENV === 'production' ? 'https://pagestager.herokuapp.com' : 'http://localhost:5000';

      const res = await fetch(`${API}/sites/subdomain/${subdomain}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        } 
      });
      const data = await res.json();
  
      return data;
  }

  return (
    <div className="App">
      <SiteBuilder sectionOptions={sectionOptions} sections={site.sections}/>


      {/* <Section type="hero"/>
      <Section type="cards"/>
      <Section type="feature"/>
      <Section type="testimonial"/>
      <Section type="cta"/>
      <Section type="pricing"/>
      <Section type="about"/>
      <Section type="socials"/>
      <Section type="email"/> */}
      {/* <Section type="footer"/> */}
    </div>
  );
}

export default App;
