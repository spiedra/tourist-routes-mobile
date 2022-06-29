import {  useState } from "react";
import {
  IonPage,
  IonContent,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonItem,
} from "@ionic/react";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal";

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);


  
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        content={'eh dude'}
      />

      <IonPage>
        <Header title="Inicio" />
        <h1 className="ion-text-center">Recomendador de Rutas Turísticas</h1>
        <IonContent>
          <IonGrid>
            <IonRow className="ion-justify-content-center">
              <IonCol size="10" sizeLg="3">
                <IonItem>
                  <IonLabel color="tertiary" position="floating">
                    Precio
                  </IonLabel>
                  <IonSelect interface="popover">
                    <IonSelectOption value="low">$400-$750</IonSelectOption>
                    <IonSelectOption value="medium">$750-$1500</IonSelectOption>
                    <IonSelectOption value="high">$1500-$4000</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonCol>
              <IonCol size="10" sizeLg="3">
                <IonItem>
                  <IonLabel color="tertiary" position="floating">
                    Categoría
                  </IonLabel>
                  <IonSelect interface="popover">
                    <IonSelectOption value="mountain">Montaña</IonSelectOption>
                    <IonSelectOption value="beach">Playa</IonSelectOption>
                    <IonSelectOption value="city">Ciudad</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonCol>
              <IonCol size="10" sizeLg="3">
                <IonItem>
                  <IonLabel color="tertiary" position="floating">
                    Servicios
                  </IonLabel>
                  <IonSelect interface="popover">
                    <IonSelectOption value="none">Ninguno</IonSelectOption>
                    <IonSelectOption value="some">Algunos</IonSelectOption>
                    <IonSelectOption value="many">Muchos</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonCol>
              <IonCol size="10" sizeLg="3">
                <IonItem>
                  <IonLabel color="tertiary" position="floating">
                    Acceso
                  </IonLabel>
                  <IonSelect interface="popover">
                    <IonSelectOption value="walk">A pie</IonSelectOption>
                    <IonSelectOption value="car">Por carro</IonSelectOption>
                    <IonSelectOption value="sea">Por mar</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonCol>
              <IonCol size="10" sizeLg="3">
                <IonItem>
                  <IonLabel color="tertiary" position="floating">
                    Cantidad/Capacidad de personas
                  </IonLabel>
                  <IonSelect interface="popover">
                    <IonSelectOption value="low">1 a 3</IonSelectOption>
                    <IonSelectOption value="medium">3 a 6</IonSelectOption>
                    <IonSelectOption value="high">6 a muchas</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonCol>
              <IonCol size="10" sizeLg="3" className="ion-text-center">
                <IonButton
                  color="primary"
                  onClick={() => console.log("Hola esto es una prueba")}
                >
                  Consultar
                </IonButton>
              </IonCol>
              <IonButton expand="block" onClick={() => setIsOpen(true)}>
                Open
              </IonButton>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
