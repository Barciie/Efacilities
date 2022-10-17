import React, { useState, useEffect } from 'react';
import { Redirect, Route, Link } from 'react-router-dom';
import {
  IonBadge,
  IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar
} from '@ionic/react';

import './useHome.css'
import Help from '../Sidebar/help'
import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';


// get data session
import Cookies from 'js-cookie';
import { BottomTabs } from '../BottomTabs';
import AppTabs from '../AppTabs';



const UserHome = () => {
  // const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState();


  useEffect(() => {
    // console.log( JSON.parse( Cookies.get("loginUser") ) )
    setUser(JSON.parse(Cookies.get("loginUser")))
  }, [])

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Services</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent >

        <br />
        <div className='hometab hometab-images'>

          {/* heading */}
          {/* images with label tags that will be changed to links later on  */}

          <div className="images">
            <img src="./pictures/helper.jpg" alt="House Keeping" /><br />
            <Link to="/HouseKeeping" className="tags"> House Keeping </Link>
          </div>
          <div className="images">
            <img src="./pictures/babysitter.jpg" alt="Baby Sitter" /><br />
            <Link to="/BabySitter" className="tags">Baby Sitter</Link>
          </div>
          <div className="images">
            <img src="./pictures/catering.jpg" alt="Catering" /><br />

            <Link to="/Catering" className="tags">Catering</Link>
          </div>
          <div className="images">
            <img src="./pictures/elec.jpg" alt="Electrician" /><br />
            <Link to="/Eletrician" className="tags">Electrician</Link>
          </div>
          <div className="images">
            <img src="./pictures/handyman.jpg" alt="Handymen" /><br />
            <Link to="/HandyMan" className="tags">Handy Men</Link>
          </div>
          <div className="images">
            <img src="./pictures/makeup.jpg" alt="Beautician" /><br />
            <Link to="/Beautician" className="tags">Beautician</Link>
          </div>
          <div className="images">
            <img src="./pictures/painter.jpg" alt="Painter" /><br />
            <Link to="Painter" className="tags">Painter</Link>
          </div>
          <div className="images">
            <img src="./pictures/plumber.jpg" alt="Plumber" /><br />
            <Link to="/Plumber" className="tags">Plumber</Link>
          </div>
          <div className="images">
            <img src="./pictures/others.jpg" alt="Others" /><br />
            <Link to="/Others" className='tags'>Others</Link>
          </div>
        </div>

        

      </IonContent>
      <AppTabs/>
    </IonPage>
  )
}

export default UserHome;





