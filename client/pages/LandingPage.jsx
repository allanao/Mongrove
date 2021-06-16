import React from 'react';
import Navbar from '../components/Navbar.jsx';
import SchemaPanel from '../components/SchemaPanel.jsx';
import SchemaMainArea from './SchemaMainArea.jsx';
import DatabasePanel from '../components/DatabasePanel.jsx';

//Navbar component

//SchemaPanel component

const LandingPage = () => {

  const schemaNameList = [];
  // function for when a user clicks "save schema" button 
  const saveSchema = (schemaName) => {
    // console.log(document.getElementById('schemaName').value);
    e.preventDefault();
    console.log('hello')
    console.log(schemaName)
    // console.log(e.target.value);
    // const schemaName = e.target.value;
  }
   
  return (
      <div id="landingPage">
          <p>Landing page component rendering</p>
          <Navbar />
          {/* <SchemaPanel
            saveSchema={saveSchema}

          /> */}
          <SchemaMainArea
            saveSchema={saveSchema}

          />
          <DatabasePanel />
      </div>
  )
}


export default LandingPage;