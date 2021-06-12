import React from 'react';
import {HashRouter, Link, Route, Switch} from "react-router-dom";

//create NavBar component
const Navbar = () => {

  
  
  return (
    <HashRouter>
        <div className="Navbar">
            <div className="menu">
            <h1>Mongrove</h1>
                {/* view button - switch between landing page and query page */}
                <Link to="/landingPage"><img src="assets/images/icon1"/> </Link>
                <Link to="/queryPage"><img src="assets/images/icon2"/> </Link>
                {/* help button - launch help window  */}
            </div>
            <Switch>
                <Route exact path="/landingPage" component={LandingPage}/>
                <Route exact path="/queryPage"  component={QueryPage}/>
            </Switch>
        </div>
    </HashRouter>
  )
};



export default Navbar;