import { 
  IonContent, IonHeader, IonList, IonPage, IonTitle,  IonToolbar , IonItem, IonText, IonButton,IonIcon, IonInput,IonLabel
} from '@ionic/react';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
// import { loginUser } from '../first1';
import { toast } from '../toast';

const Loginadmin: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function signinAdmn() 
     {
        // const res = await loginUser(email, password)
        // if  (res){    
        //    //toast('You have successfully logged in!')
        //    window.location.assign("/profile")
        //    }
        //  else{
        //    toast("Enter a valid email/ password" , 4000)
        //  } 
        }

  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent className="ion-padding">
      <form onSubmit={(e) => { e.preventDefault(); signinAdmn();}}>
        <div>
          <p>LOGIN</p>
        </div>
        <IonList>

       <IonItem>
          <IonLabel position="floating" >E-mail</IonLabel>
          <IonInput placeholder="example@gmail.com" type='email' value={email} onIonChange={(e: any) => setEmail(e.target.value)}/>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput type='password' value={password} onIonChange={(e: any) => setPassword(e.target.value)}>
          </IonInput>
        </IonItem>
        

          <IonButton expand="block" onClick={signinAdmn} >LOGIN</IonButton> <br />
          <Link to="/PasswordReset">Forgot Password?</Link>

          <p>
              Don't have an account? <Link to="./profile">Register</Link>
          </p>

          </IonList>
      </form>
      </IonContent>
  </IonPage>
)
}

export default Loginadmin