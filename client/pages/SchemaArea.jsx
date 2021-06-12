import React from 'react';

const SchemaArea = () => {

    return (
        <div className="schemaArea">
            <div id="schemaNameInput">
                <label for="schemaName">Enter Schema Name</label>
                <input type="text" id="schemaName" name="schemaName"/>
            </div>

            <div id="schemaInputField">
                <label for="schemaField">Schema Input Field</label>
                <input type="text" id="schemaField" name="schemaField"/>
            </div>

            <input type="button" id="saveSchemaBn" className="mainAreaBn">
                Save Schema
            </input>
        </div>
    );
};

export default SchemaArea;