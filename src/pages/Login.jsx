import {
  IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar, IonItem, IonText, IonButton, IonIcon, IonInput, IonLabel
} from '@ionic/react';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../firebase1';
// import { loginUser } from '../first1';
import { toast } from '../toast';
import './Home.css'

import Cookies from 'js-cookie';


const Login = () => {
  const [email, setEmail] = useState('')
  const [islaod, setIsload] = useState(false);
  const [password, setPassword] = useState('')
  const history = useHistory();

  function signinUser() {
    setIsload(true);

    loginUser(email, password).then(res => {
      if (res) {
        var user = res;

        // 
        // 
        // set the current user in session and access in all pages...
        Cookies.set("loginUser", JSON.stringify(user))

        if (!user.isAdmin) {
          toast('You have successfully logged in!', 3000)
          setIsload(false);
          setTimeout(e => {
            history.push("/adminHome")
          }, 2000)
        }
        else {
          toast('You have successfully logged in!')
          setIsload(false);
          setTimeout(e => {
            history.push("/profile")
          }, 2000)
        }
      }
      else {
        toast("Enter a valid email/ password", 4000)
        setIsload(false);
      }
    })

    setIsload(false);
  }

  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent>
        <form className="whole" onSubmit={(e) => { e.preventDefault(); signinUser(); }}>
          <div>
            <hr />
            <p className="Reg">
              {
                islaod ? "LOADING" : "LOGIN"
              }
            </p>
          </div>
          <IonList>

            <IonItem>
              <IonLabel position="floating" >E-mail</IonLabel>
              <IonInput placeholder="example@gmail.com" type='email' value={email} onIonChange={(e) => setEmail(e.target.value)} />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type='password' value={password} onIonChange={(e) => setPassword(e.target.value)}>
              </IonInput>
            </IonItem>
            <IonButton color="success" shape="round" expand="full" fill="outline" className="Regbtn" onClick={signinUser} >LOGIN</IonButton> <br />
            <Link to="/PasswordReset">Forgot Password?</Link>

            <p>
              Don't have an account? <Link to="/">Register</Link>
            </p>


          </IonList>
        </form>
      </IonContent>
    </IonPage>
  )
}

export default Login