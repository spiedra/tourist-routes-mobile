import { IonHeader, IonPage, IonTitle } from "@ionic/react";
//import { useParams } from 'react-router';

const TouristRoutes : React.FC = () => {

    //const {name} = useParams<{name : string;}>();

    return (
        <IonPage>
            <IonHeader>
                <IonTitle>
                    <h1>Rutas turisticas</h1>
                </IonTitle>
            </IonHeader>
        </IonPage>
    );
};

export default TouristRoutes;