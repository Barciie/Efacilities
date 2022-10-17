import { IonButton, IonCard, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useEffect, useState } from "react";
import AppTabs from "./AppTabs";
import getCookie from "./getCookie";

export function UserProfile() {
  const [name, setName] = useState<string>('');
  const [surname, setSurame] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  useEffect(() => {
    
    var data = getCookie("loginUser")
    if ("email" in data) {
      setSurame(data['lastname'])
      setName(data['firstname'])
      setEmail(data['email'])

      console.log(data)
    }
  }, [])

  return <IonPage>

    <IonHeader>
      <IonToolbar>
        <IonTitle>Profile</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <br /><br />
      <IonCard className="help-page">

        <IonList>
         
          <IonItem>
            <IonLabel ><b>Name</b></IonLabel>
            <IonLabel slot="end">{name}</IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel ><b>Surname</b></IonLabel>
            <IonLabel slot="end">{surname}</IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel ><b>Email</b></IonLabel>
            <IonLabel slot="end">{email}</IonLabel>
          </IonItem>
          
          <IonButton style={{ width: "100%" }} expand="full" color="danger" fill="outline" onClick={(e: any) => window.location.replace("/")}>
            LOGOUT
          </IonButton>
        </IonList>

      </IonCard>
    </IonContent>
    <AppTabs />
  </IonPage>




}
