import React from 'react';
import Navbar from '../components/Navbar';
import QueriesPanel from '../components/QueriesPanel';
import MainArea from '../components/MainArea';

// eventually add a graphs/visualization component

const QueryPage = () => {

   
    return (
        <div id="queryPage">
            <Navbar />
            <QueriesPanel />
            <MainArea />
         </div>
    );
}


export default QueryPage;