import { IonButton, IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, {useState } from 'react'
import AppTabs from '../AppTabs';
import { db } from '../firebaseConfig';
import { toast } from '../toast';


function Help() {
  const [message, setMessage] = useState("");
  // send a help ,message
  function submitHelp() {
    // validate the input
    if (message.trim().length == 0) {
      toast("type a message", 3000)
      return false
    }
    // send to firebase
    db.collection("Help").add({
      "message": message
    }).then(e => {
      toast("message sent.we'll get back to you", 3000)
      setMessage("")
    })

    return true
  }
  return <IonPage>

    <IonHeader>
      <IonToolbar>
        <IonTitle>Help</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonCard className="help-page">
        <h1><b>eFacilities FAQ And Feedback Comments</b></h1>
        <label className="posts">
          Write your question or your comment below:
        </label>
        <br />
        <textarea
          onChange={e => setMessage(e.target.value)}
          value={message}
        />
        <br />

        <IonButton className='postbutton' onClick={submitHelp}>
          Submit
        </IonButton>

        <br /><br />

        <h2><b>Report scam or Contact Us</b></h2>
        <div>
          <p>Email     : eFacilities@gmail.com</p>
          <p>Landline  : 011 256 8453</p>
          <p>Media Page: @eFacilities</p>
        </div>

      </IonCard>
    </IonContent>
    <AppTabs />
  </IonPage>




}

export default Help;

class Remarks extends React.Component {
  render() {
    return (
      <ul2>
        {this.props.items.map(item => (

          <ul key={item.id}>{item.post}</ul>
        ))}
        <br />

      </ul2>
    );
  }
}

