import React, { FunctionComponent } from "react";
import { IonGrid, IonCol, IonRow, IonIcon, IonList, } from "@ionic/react";


import { Event } from "../Clips/Event";


interface Props {
  task: Event;
  onDelete: (task: Event) => void;
}

export const ProfileItem: FunctionComponent<Props> = ({ task, onDelete }) => {
  const onClick = () => {
    onDelete(task);
  };

  return (
    <IonList>
      <IonGrid>
        <IonCol>
          <IonIcon 
          className="floatButton paddingRightDelete" name="close" onClick={onClick} />
        </IonCol>
        <IonRow>
          <IonCol>
            {task.name}
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            {task.contact}
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            {task.location}
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            {task.date}
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonList>
  );
};
