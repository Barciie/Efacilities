import { IonIcon, IonLabel, IonTabBar, IonTabButton } from '@ionic/react';
import { accessibilityOutline, fileTrayStacked, help, list, people, person, trailSignOutline } from 'ionicons/icons';


export default function AppTabs() {
  return <IonTabBar slot="bottom">
    <IonTabButton tab="tab1" href="/adminHome">
      <IonIcon icon={list} />
      <IonLabel>Services</IonLabel>
    </IonTabButton>
    <IonTabButton tab="tab2" href="/help">
      <IonIcon icon={help} />
      <IonLabel>Help</IonLabel>
    </IonTabButton>
    <IonTabButton tab="tab3" href="/personal">
      <IonIcon icon={person} />
      <IonLabel>Profile</IonLabel>
    </IonTabButton>
    <IonTabButton tab="tab4" href="/about">
      <IonIcon icon={accessibilityOutline} />
      <IonLabel>About</IonLabel>
    </IonTabButton>
  </IonTabBar>;
}
