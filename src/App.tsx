import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Register from './pages/LoginSelect';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import PasswordReset from './pages/PasswordReset';
import LoginSel from './pages/LoginSelect';
import LoginAdmn from './pages/LoginAdmin';
// import Profile from './pages/Profile';
import Loginadmin from './pages/LoginAdmin';
import Login from './pages/Login';
import Home from './pages/Home';
import AdminHome from './Sidebar/userHome'
import Profile from './Sidebar/profile';
import HouseKeeping from './pages/HouseKeeping';
import BabySitter from './pages/BabySitter';
import Beautician from './pages/Beautician';
import Catering from './pages/Catering';


import Eletrician from './pages/Electrician';
import HandyMan from './pages/Handyman';
import Painter from './pages/Painter'
import Plumber from './pages/Plumber'
import Others from './pages/Others'
import Help from './Sidebar/help';
import UserHome from './Sidebar/userHome';
import { UserProfile } from './UserProfile';
import About from './Sidebar/about';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/profile" component={Profile} exact />
        <Route path="/" component={Home} exact />
        <Route exact path="/adminHome" >
          <UserHome></UserHome>
        </Route>

        <Route path="/help" exact={true}>
            <Help/>
        </Route>

        <Route path="/personal" exact={true}>
            <UserProfile/>
        </Route>

        <Route path="/about" exact={true}>
            <About/>
        </Route>


        <Route path="/LoginSel" component={LoginSel} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/loginadmin" component={Loginadmin} exact />
        <Route path="/PasswordReset" component={PasswordReset} exact />




        <Route exact path="/HouseKeeping" component={HouseKeeping} />
        <Route exact path="/BabySitter" component={BabySitter} />
        <Route exact path="/Catering" component={Catering} />
        <Route exact path="/Eletrician" component={Eletrician} />
        <Route exact path="/HandyMan" component={HandyMan} />
        <Route exact path="/Beautician" component={Beautician} />

        <Route exact path="/Painter" component={Painter} />
        <Route exact path="/Plumber" component={Plumber} />
        <Route exact path="/Others" component={Others} />
      </IonRouterOutlet>
    </IonReactRouter>

  </IonApp>
);

export default App;
