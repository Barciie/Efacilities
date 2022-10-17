import { 
  IonContent, 
  IonHeader, 
  IonList, 
  IonPage, 
  IonTitle, 
  IonToolbar , 
  IonItem,
  IonText, IonButton,IonIcon
} from '@ionic/react';
import './Home.css';
import {star} from 'ionicons/icons';

const LoginSel: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>HOME PAGE </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        
        {/* <IonButton routerLink="./register" color="secondary">Register</IonButton> */}
        <IonButton routerLink="./login" color="secondary">Login</IonButton>
        <IonButton routerLink="./loginadmin" color="secondary">Login as Admin</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default LoginSel;