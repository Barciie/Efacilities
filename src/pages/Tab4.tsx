import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React from 'react';
import {BrowserRouter as Router,Route,Switch,BrowserRouter} from 'react-router-dom'
import './Tab3.css';
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
import Search from '../Sidebar/Search'
import logo from '../Sidebar/logo.jpeg'
import Explore from '../Sidebar/Explore';



function Tab2() {
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

          <div className="main">
              <Route path = "/" exact={true} component={Home} />
              <Route path = "/Explore" exact={true} component = {Explore}/>
              <Route path = "/profile" exact={true} component = {profile}/>
              <Route path = "/settings" exact={true} component = {settings}/>
              <Route path = "/about" exact={true} component = {about}/>
              <Route path = "/help" exact={true} component = {help}/>
          </div>
          
             
    </Router>
 
    </>
    
  );
  
}


export default Tab2;
