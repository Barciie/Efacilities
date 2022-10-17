import { 
  IonContent, 
  IonHeader, 
  IonList, 
  IonPage, 
  IonTitle, 
  IonToolbar , 
  IonItem,
  IonText, IonButton,IonIcon, IonInput,IonLabel
} from '@ionic/react';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { passwordRes } from '../firebase1';
import { toast } from '../toast';



const PasswordReset: React.FC = () => {
    const [email, setEmail] = useState('')

    async function ForgotReset() 
     {
        const res = await passwordRes(email)
        if  (res){
          toast('password reset. Please check your email',4000)
          // window.location.assign("/home")
      } else{
        toast('Enter a registered email', 3000)
      }
    }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>RESET PAGE</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

       <IonItem>
          <IonLabel position="floating" >E-mail</IonLabel>
          <IonInput  type='email' value={email} onIonChange={(e: any) => setEmail(e.target.value)}/>
        </IonItem>

          <IonButton expand="block" onClick={ForgotReset} >Reset Password</IonButton> <br />
          <Link to="/Login">Sign In</Link>
          
      </IonContent>
  </IonPage>
)
}

export default PasswordReset