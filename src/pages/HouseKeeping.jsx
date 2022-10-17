import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import LoadOccupation from '../Sidebar/LoadOccupation';

import './Tab1.css';

const HouseKeeping = () => {
  
  return (
    <LoadOccupation type="HouseKeeping"></LoadOccupation>
  );
};

export default HouseKeeping;
