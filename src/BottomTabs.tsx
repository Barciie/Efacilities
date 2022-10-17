import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { Redirect, Route } from 'react-router';
import Help from './Sidebar/help';
import UserHome from './Sidebar/userHome';

export default function app(){
  return <IonTabs>
  <IonRouterOutlet>
    <Route path="/adminHome" exact={true}>
      <UserHome/>
      
    </Route>
    <Route path="/help" exact={true}>
       <Help />
    </Route>
    <Route path="/tabs/tab3" exact={true} />
  </IonRouterOutlet>
  <IonTabBar slot="bottom">
    <IonTabButton tab="tab1" href="/adminHome">
      {/* <IonIcon icon={homeOutline} /> */}
      <IonLabel>Tab 1</IonLabel>
    </IonTabButton>
    <IonTabButton tab="tab2" href="/help">
      {/* <IonIcon icon={calendarOutline} /> */}
      <IonLabel>Tab 2</IonLabel>
    </IonTabButton>
    <IonTabButton tab="tab3" href="/tabs/tab3">
      {/* <IonIcon icon={settingsSharp} /> */}
      <IonLabel>Tab 3</IonLabel>
    </IonTabButton>
  </IonTabBar>
</IonTabs>

}