import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
// renderer process
// const { ipcRenderer } = require('electron');

// ipcRenderer.send('anything-asynchronous', 'ping');




//render landing page when app is first opened

const Index = () => {
    return <div>
        test text
        <LandingPage />
        </div>;
};

ReactDOM.render(<Index />, document.getElementById('app'));