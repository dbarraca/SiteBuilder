// import Section from './components/Section'
import SiteBuilder from './components/SiteBuilder';
import { useState, useEffect } from 'react';

function App() {
  const [ currSubdomain, setCurrSubdomain ] = useState("donutshop");
  const API = process.env.NODE_ENV === 'production' ? 'https://pagestager.herokuapp.com' : 'http://localhost:5000';

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
      const res = await fetch(`${API}/sites/subdomain/${subdomain}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        } 
      });
      const data = await res.json();
  
      return data;
  }

  // Delete Section
  const deleteSection = async (sectionId) => {
    // console.log(sectionId);
    const res = await fetch(`${API}/sites/${site._id}/sections/${sectionId}`, {
      method: "DELETE"
    });

    const data = await res.json();

    setSite(data);

    return data;
  }

  // AddSection
  const addSection = async (sectionType) => {
    const res = await fetch(`${API}/sites/${site._id}/sections`, {
      method: "POST",
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify( { sectionType: sectionType })
    });

    const data = await res.json();

    setSite(data);

    return data;
  }

  const moveSectionUp = async (sectionId) => {
    const res = await fetch(`${API}/sites/${site._id}/sections/${sectionId}/up`, {
      method: "PUT",
      headers: {
        'Content-Type' : 'application/json'
      }
    });

    const data = await res.json();

    setSite(data);

    return data;
  }

  const moveSectionDown = async (sectionId) => {
    console.log(sectionId);
  }


  return (
    <div className="App">
      <SiteBuilder sectionOptions={sectionOptions} sections={site.sections} onAdd={addSection} 
       onMoveUp={moveSectionUp} onMoveDown={moveSectionDown} onDelete={deleteSection} />

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
