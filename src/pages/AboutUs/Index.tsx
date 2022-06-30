import { IonCol, IonGrid, IonPage, IonRow } from "@ionic/react";
import Header from "../../components/Header/Header";

const AboutUs: React.FC = () => {
  return (
    <IonPage>
      <Header title="Acerca de nosotros" />
      <IonGrid style={{ padding: ".8rem .8rem 0 .8rem" }}>
        <IonRow>
          <IonCol size="12" className="ion-text-justify">
            <p>
              Somo una empresa con más de 20 años operando en el país para la
              recomendación de rutas turísticas a las personas que quieren
              disfrutar de la belleza natural que poseemos en Costa Rica.
              Nuestra empresa cuenta con los estandares más altos en
              recomendación de rutas turísticas a la medida del cliente.
            </p>
          </IonCol>
          <IonCol size="12" className="ion-text-justify">
            <p>
              Misión: Ser una plataforma de recomendación de rutas turísticas
              número uno del país.
            </p>
          </IonCol>
          <IonCol size="12" className="ion-text-justify">
            <p>
              Visión: Poner a dispoción la información de rutas turísticas a las
              personas.
            </p>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonPage>
  );
};

export default AboutUs;
