import React, { useEffect, useState } from 'react';
import Gmaps from './gmaps';
import User from '../Sidebar/UserProfile';
import {
  IonContent,
  IonHeader,
  IonFooter,
  IonLabel,
  IonItem,
  IonButton,
  IonPage,
  IonInput,
  IonCard,
  IonTitle,
  IonToolbar,
  IonCheckbox,
  IonFab,
  IonRow,
  IonFabButton,
  IonPopover,
  IonItemDivider,
  IonList,
  IonListHeader,
  IonImg
} from '@ionic/react';

import { AddProfile } from "../pages/AddProfile";
import { UpdateProfile } from "../pages/UpdateProfile";
import { ProfileList } from "../pages/ProfileList";

import { db } from '../firebaseConfig';
import getCookie from '../getCookie';
import { toast } from '../toast';


const Profile = () => {
  const [name, SetName] = useState();
  const [contactno, SetContactNo] = useState();
  const [location, SetLocation] = useState();
  const [date, SetDate] = useState();
  const [cat, setCat] = useState();
  const [showInputPopover, SetShowInputPopover] = useState(false);

  const [updatePopover, SetUpdatePopover] = useState(false);
  function hideUpdate() {
    SetUpdatePopover(false)
  }
  function showUpdate() {
    SetUpdatePopover(true)
  }

  const showPopover = () => {
    SetShowInputPopover(
      true
    );
  }

  const hidePopover = () => {
    SetShowInputPopover(
      false
    );
  }

  const addTask = (event) => {
    event.preventDefault();

    // setState(previousState => ({
    //     newTask: {
    //         id: previousState.newTask.id + 1,
    //         name: "",
    //         contact: "",
    //         location: "",
    //         date: "",
    //     },
    //     tasks: [...previousState.tasks, previousState.newTask]
    // }));
  };

  // const handleTaskChange = (Event) => {
  //     this.setState({
  //         newTask: {
  //             ...this.state.newTask,
  //             name: event.target.value,
  //             contact: event.target.value,
  //             location: event.target.value,
  //             date: event.target.value,

  //         }
  //     });
  // };

  const deleteTask = (taskToDelete) => {
    // setState(previousState => ({
    //     tasks: [
    //         ...previousState.tasks.filter(task => task.id !== taskToDelete.id)
    //     ]
    // }));

  };


  const [taskList, setTask] = useState([]);
  useEffect(async function () {
    var email = getCookie("loginUser")['email']
    await db.collection("occupations").where("email", "==", email).onSnapshot(e => {
      setTask(e.docs.map(e => {
        return {
          data: e.data(),
          "id": e.id
        }
      }))

    })

  }, [])

  function delete_task(id) {
    db.collection("occupations").doc(id).delete()
  }

  const [update_id, setUpdate_id] = useState({});


  return (
    <IonPage >


      <IonContent >
        <div className='hometab'>

          {/* <h1 >  PROFILE OF ADMIN USER </h1> */}
          {/* <User/> */}
          {/* < Gmaps/> */}
          {/* <Route path = "/SearchLocation" exact={true} component = {SeachLocation}/> */}

          <IonHeader>
            <IonToolbar>
              <IonTitle> <b>SERVICES</b> </IonTitle>
              <IonButton size='small' expand="block" fill="outline" slot="end" onClick={e=>window.location.replace("/")}>
                Logout
              </IonButton>
            </IonToolbar>
            
          </IonHeader>



          <IonList>
            <IonListHeader lines="inset">
              <IonButton style={{ width: "100%" }} color='success' expand="full" fill="outline" onClick={showPopover}>
               add Profile
              </IonButton>
            </IonListHeader>

          </IonList>



          {taskList.map(e =>
            <IonCard>
              <IonList id={e.id}>
                <IonItemDivider>
                  <IonLabel>
                    {e.data.occupation}
                  </IonLabel>
                  <IonButton size="small" slot="end" color='success' expand="block" fill="outline" onClick={a => {
                    setUpdate_id(e)
                    showUpdate()
                  }}>
                    Update
                  </IonButton>
                </IonItemDivider>

                <div className='imagebox' >
                  <IonImg src={e.data.image}></IonImg>
                </div>


                <IonListHeader lines="inset">
                  <IonLabel ><b>Description</b></IonLabel>
                </IonListHeader>
                <IonListHeader >
                  <IonLabel>{e.data.description}</IonLabel>
                </IonListHeader>
              </IonList>

              <IonList>
                <IonItem>
                  <IonLabel ><b>Contact</b></IonLabel>
                  <IonLabel slot="end">{e.data.contact}</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel ><b>Name</b></IonLabel>
                  <IonLabel slot="end">{e.data.name}</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel ><b>Email</b></IonLabel>
                  <IonLabel slot="end">{e.data.email}</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel ><b>Location</b></IonLabel>
                  <IonLabel slot="end">{e.data.location}</IonLabel>
                </IonItem>
                <IonButton style={{ width: "100%" }} expand="full" color="danger" fill="outline" onClick={a => delete_task(e.id)}>
                  DELETE
                </IonButton>
              </IonList>
            </IonCard>)}






          <br />
          {/* {name} {contactno} {location} {date} */}



          <ProfileList tasks={"tasks"} onDelete={deleteTask} />
        </div>
      </IonContent>


      <IonPopover
        backdropDismiss={false}
        isOpen={updatePopover}
        onDidDismiss={hideUpdate}
        className='full'
      >
        <IonToolbar>
          <h4 className="centerButton" style={{ paddingLeft: 20 }}> Your Profile: </h4>
        </IonToolbar>

        <UpdateProfile
          SetUpdatePopover={SetUpdatePopover}
          data={update_id}
        />

        <div className="centerInput">
          <IonButton className="subMaxWidth" expand="block" onClick={e => hideUpdate()}> Close </IonButton>
        </div> <br />
      </IonPopover>


      <IonPopover
        backdropDismiss={false}
        isOpen={showInputPopover}
        onDidDismiss={hidePopover}
        className='full'
      >
        <IonToolbar>
          <h4 className="centerButton" style={{ paddingLeft: 20 }}> Your Profile: </h4>
        </IonToolbar>

        <AddProfile
          SetShowInputPopover={SetShowInputPopover}
        />

        <div className="centerInput">
          <IonButton className="subMaxWidth" expand="block" onClick={e => hidePopover()}> Close </IonButton>
        </div> <br />
      </IonPopover>

    </IonPage>

  )
}

export default Profile;