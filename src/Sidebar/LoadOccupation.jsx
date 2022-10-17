import React, { useEffect, useState } from 'react';
import {
  IonContent,
  IonHeader, IonLabel,
  IonItem,
  IonButton,
  IonPage, IonCard,
  IonTitle,
  IonToolbar, IonItemDivider,
  IonList,
  IonListHeader,
  IonImg
} from '@ionic/react';
import { db } from '../firebaseConfig';

const LoadOccupation = ({ type }) => {
  const [taskList, setTask] = useState([]);

  useEffect(async function () {
    await db.collection("occupations").where("occupation", "==", type).onSnapshot(e => {
      setTask(e.docs.map(e => {
        return {
          data: e.data(),
          "id": e.id
        };
      }));

    });

  }, []);

  function delete_task(id) {
    db.collection("occupations").doc(id).delete();
  }
  return (
    <IonPage>


      <IonContent>
        <div className='hometab'>

          <IonHeader>
            <IonToolbar>
              <IonTitle> <b>{type}</b> </IonTitle>
              <IonButton size='small' expand="block" fill="outline" slot="end" onClick={e => window.location.replace("/adminHome")}>
                back
              </IonButton>
            </IonToolbar>

          </IonHeader>

          {taskList.length == 0 ? <div style={{ textAlign: 'center' ,marginTop:"20px"}}>
            <b>NO DATA TO DISPLAY</b>
          </div> : ""}

          {taskList.map(e => <IonCard>
            <IonList id={e.id}>
              <IonItemDivider>
                <IonLabel>
                  {e.data.occupation}
                </IonLabel>
              </IonItemDivider>

              <div className='imagebox'>
                <IonImg src={e.data.image}></IonImg>
              </div>


              <IonListHeader lines="inset">
                <IonLabel><b>Description</b></IonLabel>
              </IonListHeader>
              <IonListHeader>
                <IonLabel>{e.data.description}</IonLabel>
              </IonListHeader>
            </IonList>

            <IonList>
              <IonItem>
                <IonLabel><b>Contact</b></IonLabel>
                <IonLabel slot="end">{e.data.contact}</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel><b>Name</b></IonLabel>
                <IonLabel slot="end">{e.data.name}</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel><b>Email</b></IonLabel>
                <IonLabel slot="end">{e.data.email}</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel><b>Location</b></IonLabel>
                <IonLabel slot="end">{e.data.location}</IonLabel>
              </IonItem>
              {/* <IonButton style={{ width: "100%" }} expand="full" color="danger" fill="outline" onClick={a => delete_task(e.id)}>
                DELETE
              </IonButton> */}
            </IonList>
          </IonCard>)}
        </div>
      </IonContent>
    </IonPage>

  );
};
export default LoadOccupation;
