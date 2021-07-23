import { useState, useEffect } from 'react';

// import Section from './components/Section'
import SiteBuilder from './components/SiteBuilder';
import Site from './components/Site';
import SiteSelector from './components/SiteSelector';

import { Provider } from 'react-redux'; 
import store from './store';

function App() {
  const [ currSubdomain, setCurrSubdomain ] = useState("donutshop");
  const API = process.env.NODE_ENV === 'production' ? 'https://pagestager.herokuapp.com' : 'http://localhost:5000';

  const sectionOptions = [ "hero", "cards", "feature", "testimonial", "cta",  "pricing", "about", "socials", "email", "footer"];
  const [ site, setSite ] = useState({});

  // useEffect(() => {
  //   const getSite = async () => {
  //     const siteFromServer = await fetchSite(API, currSubdomain);

  //     setSite(siteFromServer);
  //   }

  //   getSite();
  // },[]);
  
  // Fetch site
  /*
  const fetchSite = async (subdomain) => {
    const res = await fetch(`${API}/sites/subdomain/${subdomain}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      } 
    });
    const data = await res.json();

    return data;
   }*/

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

  const moveSectionUp = async (section) => {
    const res = await fetch(`${API}/sites/${site._id}/sections/${section._id}/up`, {
      method: "PUT",
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({ section: section })
    });
  
    const data = await res.json();

    setSite(data);

    return data;
  }

  const moveSectionDown = async (sectionId) => {
    console.log(sectionId);
  }

  return (
    <Provider store={store}>
      <div className="App">
        {/* <SiteSelector /> */}
        <Site siteId="60e5d241cbc583cc411b974c"/>

        {/* sections={site.sections}  */}

        {/* <SiteBuilder siteId="60e5d241cbc583cc411b974c" sectionOptions={sectionOptions} onAdd={addSection}  */}
         onMoveUp={moveSectionUp} onMoveDown={moveSectionDown} onDelete={deleteSection} />

        {/* <Site sections={site.sections} /> */}
      </div>
    </Provider>
  );
}

export default App;
