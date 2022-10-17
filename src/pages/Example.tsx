import { 
    IonContent, 
    IonHeader, 
    IonList, 
    IonPage, 
    IonTitle, 
    IonToolbar , 
    IonItem,
    IonText, IonButton,IonIcon
  } from '@ionic/react';
  import React, {useState, useEffect} from 'react';

  const Home: React.FC = () => {
      const [input, setInput] = useState<string>('')

      useEffect(() => {
          console.log(input)
      }, [input])
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Example page </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            Hello world!
        </IonContent>
    </IonPage>
  )
}

export default Home