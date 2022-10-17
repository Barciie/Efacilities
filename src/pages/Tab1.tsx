import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import React from 'react'
import '../App.css';
import {BrowserRouter as Router,Route,Switch,BrowserRouter} from 'react-router-dom'
import { Link } from 'react-router-dom';
import '../Sidebar/Sidebars.css';
import Navbar from '../Sidebar/Navbar'
import { BsJustify } from "react-icons/bs"
import {useState } from 'react'
import Home from '../Sidebar/userHome'
// import Explore from './Explore'
import profile from '../Sidebar/profile'
import settings from '../Sidebar/settings'
import about from '../Sidebar/about'
import help from '../Sidebar/help'
import logout from '../Sidebar/logout'
import Search from '../Sidebar/Search'
import logo from '../Sidebar/logo.jpeg'
import Explore from '../Sidebar/Explore';
import {IonHeader} from '@ionic/react'


function Tab1() {
  const [showNav, setShowNav] = useState (false)
  return (
   <>
   
    <Router>
         
        {/*<wrapper>*/}
        <Router>
          <header>
            <BsJustify onClick={() => setShowNav(!showNav)}/>
            <img src={logo} alt="Logo" className = "logo" />
            <b>eFacilities</b>
          </header>
        </Router>
        {/*</wrapper>/*}
        

        {/* {showNav && <Navbar />} */}
        <Navbar show={showNav} />
        {/* <Home/> */}
          <div className="main">
              <Route path = "/" exact={true} component={Home} />
              <Route path = "/profile" exact={true} component = {profile}/>
              <Route path = "/settings" exact={true} component = {settings}/>
              <Route path = "/Search" exact={true} component = {Search}/>
              <Route path = "/about" exact={true} component = {about}/>
              <Route path = "/help" exact={true} component = {help}/>
              <Route path = "/logout" exact={true} component = {logout}/>
          </div>
          
             
    </Router>
 
    </>
    
  );
  
}


export default Tab1;
