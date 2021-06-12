import React from 'react';
import SchemaArea from './schemaArea';
import TestDBGenArea from './TestDBGenArea';

const MainArea = () => {
    
    return (
        <div id="mainArea">
            <SchemaArea />
            <TestDBGenArea />
        </div>
    );
};

export default MainArea;