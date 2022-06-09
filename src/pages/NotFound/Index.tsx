import { IonHeader, IonPage } from "@ionic/react";
//import { useParams } from 'react-router';

const NotFound : React.FC = () => {

    //const {name} = useParams<{name : string;}>();

    return (
        <IonPage>
            <IonHeader>
                <h1>Page not found - 404</h1>
            </IonHeader>
        </IonPage>
    );
};

export default NotFound;