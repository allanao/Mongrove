import * as React from 'react';
import * as ReactDOM from 'react-dom';


//routing to render different views


const Index = () => {
    return <div>Hello React!!! I am being watched</div>;
};

ReactDOM.render(<Index />, document.getElementById('app'));