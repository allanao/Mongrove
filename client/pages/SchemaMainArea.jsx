import React from 'react';
import SchemaArea from './SchemaArea.jsx';
import TestDBGenArea from './TestDBGenArea.jsx';


const SchemaMainArea = (props) => {
// use useState for handling schema data from SchemaArea component to passdown to dropdown selection in TestDBGenArea    
  const {
    saveSchema,
  } = props;

  return (
      <div id="schemaMainArea" className="mainAreaComponents">
          <SchemaArea
            saveSchema={saveSchema}

          />
          <TestDBGenArea />
      </div>
  );
};

export default SchemaMainArea;