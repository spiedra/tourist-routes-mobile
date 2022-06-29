import React from "react";
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
} from "@ionic/react";

function Modal(props: any) {
  return (
    <IonPage>
      <IonModal isOpen={props.isOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Modal</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={props.onClose}>Aceptar</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>{props.content}</IonContent>
      </IonModal>
    </IonPage>
  );
}

export default Modal;
