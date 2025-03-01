import * as React from 'react';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import QueryPage from './pages/QueryPage.jsx';
import './stylesheets/styles.css';
import { ipcRenderer } from "electron";

const App = () => {
  // USING STATE TO HANDLE AND PERSIST DATA
  // from schema creation area
  const [schemaList, setSchemaList] = useState([]);
  // from test db generation area
  const [testDatabasesList, setTestDatabasesList] = useState([]);
  // from query area
  const [testQueriesList, setTestQueriesList] = useState([]);


  // Handling functionality for 'SAVE SCHEMA' button:
  // when clicked, should add new schema to state and add new schemaItem component to schemaPanel
  function handleSaveSchema(schemaName, schemaValue) {
    const newSchemaList = [...schemaList];
    newSchemaList.push({
      name: schemaName,
      value: schemaValue
    })
    console.log('schemaName', schemaName, 'schemaValue', schemaValue);
    setSchemaList(newSchemaList);
    // console.log('schemaList: ', schemaList);
  }

  // Handling functionality for 'CONFIGURE TEST DATABASE' button:
  // when clicked, add all 3 inputs to state and add a new dbItem to dbPanel
  async function handleGenerateTestDatabase(testDBname, selectedSchema, numberOfRows) {
    // Add schema to the database list
    let schema = '';
    console.log('selectedSchema: ', selectedSchema);
    
    schemaList.forEach(element => {
      if (element.name === selectedSchema) {
        schema = element.value;
      }
    })

    const newList = [...testDatabasesList];
    newList.push({
      name: testDBname, 
      schemaName: selectedSchema, 
      schema: schema,
      rows: numberOfRows});

    setTestDatabasesList(newList);
      //use update dbName to create a new dbItem component and and it to the db panel
    // backend: all inputs get sent to backend (IPC renderer --> main?)
  }

  // Handle functionality of 'RUN QUERY' button:
  const handleRunQuery = async (selectedDB, testQueryName, testQuery) => {
    //when runQuery button is clicked, turn the inputted values into an obj and update list in state
    let schemaName;
    let schema;
    let numberOfDocuments;
    let dbName;
  
    testDatabasesList.forEach(element => {
      if (element.name === selectedDB) {
        schemaName = element.schemaName;
        schema = element.schema;
        numberOfDocuments = element.rows;
        dbName = element.name;
      }
    })
      
    console.log(testQuery, schemaName, schema, numberOfDocuments, dbName)
    const result = await ipcRenderer.invoke('run-query', testQuery, schemaName, schema, numberOfDocuments, dbName);
    
    const newQueriesList = [];
    newQueriesList.push(...testQueriesList, {
      name: testQueryName, 
      query: testQuery, 
      time: result,
      activeStatus: true
    });
    setTestQueriesList(newQueriesList);
  };


// Handle functionality for handleActivateQuery
// When user clicks on a queryItem in the queryPanel, make its activeStatus property the opposite boolean ofits current value and toggle display of its corresponding resultsItem in the resultsArea
const handleActivateQuery = (queryKey, status) => {
  console.log('handleActivateQuery clicked');
  console.log('queryKey', queryKey);
  console.log('status', status);
  // create a new array of query objects which is identical to the current state, except with the target object updated, then replace testQueriesList in state with the new array
  let updatedQueriesList = [];

  for (let i = 0; i < testQueriesList.length; i++) {
    if (i === queryKey) {
      console.log('query INPUT status:', status);
      testQueriesList[i].activeStatus = !testQueriesList[i].activeStatus;
    }
    updatedQueriesList.push(testQueriesList[i]);
  }

  console.log('updated list', updatedQueriesList);
  setTestQueriesList(updatedQueriesList);
}



  return (
    <div>
      {/* React router should first show LandingPage, then switch to QueryPage when  button is clicked */}
      <HashRouter>
        <Switch>
          <Route exact path="/"           
            render={(props) => 
              <LandingPage 
                testDatabasesList={testDatabasesList}
                handleGenerateTestDatabase={handleGenerateTestDatabase}
                schemaList={schemaList}
                handleSaveSchema={handleSaveSchema}
              />
            }
          />
          <Route exact path="/queryPage"  
            render={(props) => 
              <QueryPage 
                testDatabasesList={testDatabasesList}
                testQueriesList={testQueriesList}
                handleRunQuery={handleRunQuery}
                handleActivateQuery={handleActivateQuery}
              />
            }
          />
        </Switch>               
      </HashRouter>
    </div>
  );
};

ReactDOM.render( <App />, document.getElementById('app'));

