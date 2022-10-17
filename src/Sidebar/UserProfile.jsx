
import { camera, trash, close, attach } from 'ionicons/icons';
import { PictureGallery } from '../Clips/PictureGallery';

// import '../index.css';

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
    IonItemDivider
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import React, { useState, useEffect } from 'react';

//
import { Event } from "../Clips/Event";
import { AddProfile } from "../pages/AddProfile";
import { ProfileList } from "../pages/ProfileList";
import { ProfileItem } from "../pages/ProfileItem";
import '../pages/Home.css';


// interface State {
//     newTask: Event;
//     tasks: Event[];
//     showInputPopover: boolean;
// }

export default function App()  {
    const [name,SetName] = useState();
    const [contactno,SetContactNo] = useState();
    const [location,SetLocation] = useState();
    const [date,SetDate] = useState();
    const [showInputPopover,SetShowInputPopover]=useState(false);


    const  showPopover = () => {
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
        return (


            <>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle> <b>SERVICE PROVIDER PROFILES</b> </IonTitle>
                    </IonToolbar>
                </IonHeader>
                
                <IonContent>

                    <IonFab horizontal="center" edge={true} >

                        <IonButton size="small" onClick={showPopover}>
                            New Profile
                        </IonButton>


                    </IonFab>
                    <br />
                    {name} {contactno} {location} {date}
                    <IonPopover
                        backdropDismiss={true}
                        isOpen={showInputPopover}
                        onDidDismiss={hidePopover}
                    >
                        <IonToolbar>
                            <h4 className="centerButton"> Your Profile: </h4>
                        </IonToolbar>

                        <AddProfile
                           name={name} SetName={SetName}
                           contactno={contactno} SetContactNo={SetContactNo}
                           location={location} SetLocation={SetLocation}
                           date={date} SetDate={SetDate}
                           SetShowInputPopover={SetShowInputPopover} 
                        />

                        <div className="centerButton">
                        <IonButton className="subMaxWidth" expand="block" onClick={e=> hidePopover()}> Close </IonButton>
                        </div> <br />
                    </IonPopover>

                    <ProfileList tasks={"tasks"} onDelete={deleteTask} />


                </IonContent>
            </>
        );
    }