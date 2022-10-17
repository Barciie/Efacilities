import React, { FunctionComponent, useState } from "react";
import {
  IonButton,
  IonGrid,
  IonRow,
  IonLabel,
  IonCard,
  IonItem,
  IonInput,
  IonTextarea,
  IonSelect,
  IonSelectOption,
  IonPage,
  IonImg
} from "@ionic/react";


import { Event } from "../Clips/Event";
import { Camera, CameraResultType } from '@capacitor/camera';
import { db } from '../firebaseConfig';
import { toast } from "../toast";
import getCookie from '../getCookie'
// interface Props {
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
//   task: Event;
// }





export const UpdateProfile = ({ SetUpdatePopover, data }) => {
  const [image, SetImage] = useState(data.data.image);
  const [loc, SetLocation] = useState(data.data.location);
  const [contact, SetContact] = useState(data.data.contact);
  const [description, SetDescription] = useState(data.data.description);
  const [occupation, SetOccupation] = useState(data.data.occupation);




  async function SubmitForm(e) {
    SetUpdatePopover(true)


    var error = false;
    var check = [loc, contact, description]
    check.map(e => e.trim() == '' ? error = true : "")
    if (error == true) {
      toast('Fill all inputs', 3000)
      console.log(check)
      return false
    }

    db.collection("occupations").doc(data.id.trim()).update({
      description: description,
      location: loc,
      contact: contact,
    }).then(e => {
      toast("profile data updated!", 3000)
      SetUpdatePopover(false)

      return true;
    })

  }

  const takePicture = async () => {
    const cam = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    SetImage("data:image/png;base64," + cam.base64String);

    // Can be set to the src of an image now
    // imageElement.src = imageUrl;
    console.log(image);
  };

  return (


    <div className="whole3"
    >

      {/* {name} {contactno} {location} {date} 
       */}

      <IonGrid className="shaping" className="gridPadding">


        <IonCard>
          {/* Adding the profile img  */}

          <div className="attention-text"> ATTENTION <br />
            YOU CANT CHANGE YOUR PICTURE,NAME,SURNAME YOU CAN ONLY
            UPDATE YOU LOCATION AND CONTACT DETAILS(PHONE NUMBER AND EMAIL).
            FOR SAFETY REASON.<br />
            IF TOU WISH TO CHANGE PLEASE FOLLOW THE INSTRUCTION BELOW.
            1. SEND AN EMAIL TO : efacilities1@gmail.com  or email: efailitiessa@gmail.com
            2. ALL THE OTHER INSTRUCTION WILL BE SENT AFTER WE RECIEVE YOU EMAIL.
            FROM E-FACILITIES THANK YOU :).

          </div>


          <hr></hr>
          {/* ADDING A PICTRE */}
          <IonRow className="centerInput">
            <IonButton disabled style={{ width: '100%' }} color="primary" expand="full" fill="outline"> Upload pic</IonButton>
          </IonRow>

          <IonRow >
            <div className='imagebox' >
              {image !== "" ? <IonImg src={image}></IonImg> : ''}

            </div>
          </IonRow>

        </IonCard>




        <IonCard>
          <IonRow className="centerInput">
            <IonLabel>Contact no.</IonLabel>
          </IonRow>

          <IonRow className="centerInput">
            <input className="subMaxWidth inputBorder"
              type="tel"
              placeholder="0748979592"
              onChange={e => SetContact(e.target.value)} value={contact} />
          </IonRow>
        </IonCard>



        <IonCard>
          <IonRow className="centerInput">

            <IonLabel>Location</IonLabel>
          </IonRow>
          <IonRow className="centerInput">
            <input className="subMaxWidth inputBorder"
              onChange={e => SetLocation(e.target.value)} value={loc} />
          </IonRow>
        </IonCard>


        <IonCard>
          <IonRow className="centerInput">

            <IonLabel>Description</IonLabel>
          </IonRow>
          <IonRow className="centerInput">
            <textarea className="subMaxWidth inputBorder"
              onChange={e => SetDescription(e.target.value)} value={description} ></textarea>
          </IonRow>
        </IonCard>








        <IonCard>
          <IonRow className="centerInput" style={{ display: 'flex' }}>
            <IonItem style={{ width: '100%' }} disabled expand="full" fill="outline">
              <IonLabel>Occupation.</IonLabel>
              <IonSelect onIonChange={e => SetOccupation(e.detail.value)} disabled>

                {/* 1 */}
                <IonSelectOption value="HouseKeeping">
                  House Keeping
                </IonSelectOption>
                {/* 2 */}
                <IonSelectOption value="BabySitter" >
                  BabySitter
                </IonSelectOption>
                {/* 3 */}
                <IonSelectOption value="Catering" >
                  Catering
                </IonSelectOption>
                {/* 4 */}
                <IonSelectOption value="Eletrician" >
                  Eletrician
                </IonSelectOption>
                {/* 5 */}
                <IonSelectOption value="HandyMan" >
                  HandyMan
                </IonSelectOption>
                {/* 6 */}
                <IonSelectOption value="Beautician" >
                  Beautician
                </IonSelectOption>
                {/* 7 */}
                <IonSelectOption value="Painter" >
                  Painter
                </IonSelectOption>
                {/* 8 */}
                <IonSelectOption value="Plumber">
                  Plumber
                </IonSelectOption>
                {/* 9 */}
                <IonSelectOption value="Others">
                  Others
                </IonSelectOption>



              </IonSelect>
            </IonItem>

          </IonRow>
        </IonCard>


        <IonCard>
          <IonRow className="centerInput">
            <IonButton onClick={e => SubmitForm(e)} style={{ width: '100%' }} fill="solid" type="submit">Update Event</IonButton>
          </IonRow>
        </IonCard>


      </IonGrid>
      <hr />


    </div>
  )
};