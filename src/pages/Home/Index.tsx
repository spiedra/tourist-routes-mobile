import { IonHeader, IonPage, IonTitle, IonContent } from '@ionic/react';
//import { useParams } from 'react-router';

const Home : React.FC = () => {

    //const {name} = useParams<{name : string;}>();

    return (
        <IonPage>
            <IonHeader>
                <IonTitle>
                    <h1>Inicio</h1>
                </IonTitle>
            </IonHeader>
            <IonContent>
                
            </IonContent>
        </IonPage>
    );
};

export default Home;