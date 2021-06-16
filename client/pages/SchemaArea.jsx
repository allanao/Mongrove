import React, { useState } from 'react';
import Editor from '../components/Editor.jsx';


const SchemaArea = (props) => {
  const {
    saveSchema,
  } = props;



  // handles value from codemirror input
  const [schema, setSchema] = useState('{field: text}');
  const [schemaNameList, setSchemaNameList] = useState([]);

  const [schemaName, setSchemaName] = useState('');

  // selects user input when change is detected
  function handleOnChange (e) {
    // e.preventDefault();
    alert('saving schemaName:', schemaName)
    // console.log('handleOnChange', e.target.value);
    // setSchemaName(e.target.value);
  }

  // function saveSchema () {
  //   // console.log(document.getElementById('schemaName').value);
  //   // setSchemaName(e.target.value);
  //   console.log(document.getElementById('schemaName').value);
  //   const schemaName = e.target.value;
  // }

    return (
        <div id="schemaArea" className="mainAreaComponents">
            {/* enter schema name field */}
            <h2>Schema Creation Area</h2>
              {/* <form> */}
                <label htmlFor="schemaName">Enter Schema Name</label>
                <input 
                  type="text"
                  id="schemaName"
                  name="schemaName"
                  onChange={handleOnChange}
                  value={schemaName}
                />
                

                {/* schema input field */}
                {/* <label htmlFor="schemaField">Schema Input Field</label> */}
                <Editor 
                  displayName="Enter Schema here:"
                  value={schema}
                  onChange={setSchema}
                />
                {/* <input type="text" id="schemaField" name="schemaField"/> */}
              
                {/* save schema button */}
                <button 
                  type="submit"
                  onClick={ () =>  saveSchema(schemaName)}
                  id="saveSchemaBn"
                  className="mainAreaBn"
                  > send
                </button>
              {/* </form> */}
        </div>
    );
};

export default SchemaArea;