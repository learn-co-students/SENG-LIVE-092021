import React, { useEffect, useState } from "react";
import Donations from "./donation/Donations";

function App() {

  const [organizations, setOrganizations] = useState([]);

  // This method will make a fetch request to get all organizations
  useEffect(() => {
    fetch("http://localhost:9292/organizations")
      .then((r) => r.json())
      .then((orgs) => setOrganizations(orgs));
  }, []);

  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>Donation Tracker</h1>
      <Donations orgs={organizations}/>
    </div>
  );
}

export default App;
