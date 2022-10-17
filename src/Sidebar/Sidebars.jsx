import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './Sidebars.css';
import Navbar from './Navbar'
import { BsJustify } from "react-icons/bs"
import { useState } from 'react'
import Home from './userHome'
// import Explore from './Explore'
import profile from './profile'
import settings from './settings'
import about from './about'
import help from './help'
import covid from './covid'
import logout from './logout'
import Search from './Search'
import Navigation from './Navigation'
import logo from './logo.jpeg'
import Explore from './Explore';



function Sidebars() {
  const [showNav, setShowNav] = useState(false)
  return (
    <>

      <Router>


        {/*<wrapper>*/}
        <Router>
          <header>
            <div>
              <BsJustify onClick={() => setShowNav(!showNav)} />
              <img src={logo} alt="Logo" className="logo" />
              <b>eFacilities</b>
            </div>
          </header>
        </Router>
        {/*</wrapper>/*}
        

        {/* {showNav && <Navbar />} */}
        <Navbar show={showNav} />

        <div className="main">
          <Route path="/" exact={true} component={Home} />
          <Route path="/Explore" exact={true} component={Explore} />
          <Route path="/profile" exact={true} component={profile} />
          <Route path="/settings" exact={true} component={settings} />
          <Route path="/about" exact={true} component={about} />
          <Route path="/covid" exact={true} component={covid} />
          <Route path="/help" exact={true} component={help} />
        </div>


      </Router>

    </>

  );

}




export default Sidebars;