import { IonContent, IonPage } from "@ionic/react";
import Header from "../../components/Header/Header";

const NotFound: React.FC = () => {
  return (
    <IonPage>
      <Header title="Error" />
      <IonContent>
        <h1>Page not found - 404</h1>
      </IonContent>
    </IonPage>
  );
};

export default NotFound;
