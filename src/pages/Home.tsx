import { 
  IonContent, 
  IonHeader, 
  IonList, 
  IonPage, 
  IonTitle, 
  IonToolbar , 
  IonItem,
  IonText, IonButton,IonIcon, IonInput, IonLabel, IonCheckbox
} from '@ionic/react';
import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from '../toast';
import {addUserData, registerUser} from '../firebase1';
import './Home.css';

const Home: React.FC = () => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [ isAdmin, setIsAdmin ] = useState( false )
  const [password, setPassword] = useState('')
  const [cPassword, setCPassword] = useState('')
  const [isload, setIsload] = useState( false )

  const history = useHistory();



  function signupUser() {
    setIsload( true )

    if(password !== cPassword){
      return toast ('Passwords should match!')
    }
    if(email.trim() === '' || password.trim() === '' ){
      return toast('username and password required')
    }

    // user reg to auth
    registerUser(email, password).then( res => {
      if( res ){
        // console.log( res )
        let uid = res;
        addUserData( name, lastName, email, password, isAdmin, uid ).then( fb => {
          if( fb ) {
            toast ('You have successfully registered!')
            setIsload( false )
            // window.location.assign("/loginsel")
            history.push("/login")
          }
        })
        .catch( err => {
          console.error( err.code );
          setIsload( false )
        })
      }
    }).catch( err => {
      console.error( err.code )
      setIsload( false )
    })
    

    setIsload( false )
  }


  function set_IsAdmin() {
    // console.log( "set is admin")
    setIsAdmin( !isAdmin )
  }

  return (
  
    <div >
    <IonPage  >
      <IonHeader>
      </IonHeader>


      <IonContent>
      <form className="whole" onSubmit={(e) => { e.preventDefault(); signupUser();}}>

        <div className="Reg">
        <hr />
          <h1>CREATE AN ACCOUNT</h1>
        </div>
        <IonList>

        
        <IonItem onClick= { e=> set_IsAdmin() } >
       
          <IonLabel position="floating" className="radioLabel"> I want to be an Admin. </IonLabel>        <br />
          
          <IonCheckbox/>
       
        </IonItem>
        
        <div >
        <IonItem >
          <IonLabel position="floating"> First Name</IonLabel>
          <IonInput required={true} type="text" value={name} onIonChange={(e: any) => setName(e.target.value)}/>
        </IonItem>

        <IonItem >
          <IonLabel position="floating"> Last Name</IonLabel>
          <IonInput required={true} type="text" value={lastName} onIonChange={(e: any) => setLastName(e.target.value)}/>
        </IonItem>

          <IonItem >
          <IonLabel position="floating" >E-mail</IonLabel>
          <IonInput  type='email' value={email} onIonChange={(e: any) => setEmail(e.target.value)}/>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput type='password' value={password} onIonChange={(e: any) => setPassword(e.target.value)}/>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Confirm Password</IonLabel>
          <IonInput type='password' value={cPassword} onIonChange={(e: any) => setCPassword(e.target.value)}/>
        </IonItem>
        </div>

 

        <IonButton  color="success" shape="round" expand="full" fill="outline" className="Regbtn"  onClick={signupUser}>
          {
            isload ? "LOADING" : "SIGN UP"
          }
        </IonButton>

        <p className="radioLabel">
          Already have an account? <Link to="./login">Login as USER OR ADMIN</Link> 

          {/*instagram/facebook/twitter accounts */}
          <p>Follow us: <Link to="https://www.instagram.com/efacilities1/" >INSTAGRAM</Link> OR <Link to="https://web.facebook.com/profile.php?id=100073965983603">FACEBOOK</Link>
          </p>

        </p>

        </IonList>
      </form>  
      </IonContent>

    </IonPage>
    </div>
  )
}

export default Home;
