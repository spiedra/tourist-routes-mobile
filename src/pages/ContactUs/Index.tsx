import {
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTextarea,
} from '@ionic/react'
import Header from '../../components/Header/Header'

const ContactUs: React.FC = () => {
  return (
    <IonPage>
      <Header title='Contactenos' />
      <IonContent>
        <IonGrid className='ion-justify-content-center'>
          <IonRow className='ion-justify-content-center'>
            <IonCol size='11' sizeLg='8' className='ion-text-justify'>
              <p>
                Arriésgate a tomar la mejor aventura de tu vida. Por favor,
                ponte en contacto con nosotros. ¿Cómo podemos ayudarte? ¿Qué es
                lo que esperas de las rutas turísticas? Queremos leerte...
              </p>
            </IonCol>
          </IonRow>
          <IonRow className='ion-justify-content-center'>
            <IonCol size='12' sizeLg='8'>
              <IonItem>
                <IonLabel color='tertiary' position='floating'>
                  Nombre
                </IonLabel>
                <IonInput type='text'></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className='ion-justify-content-center'>
            <IonCol size='12' sizeLg='8'>
              <IonItem>
                <IonLabel color='tertiary' position='floating'>
                  Correo electronico
                </IonLabel>
                <IonInput type='email'></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className='ion-justify-content-center'>
            <IonCol size='12' sizeLg='8'>
              <IonItem>
                <IonLabel color='tertiary' position='floating'>
                  ¿De dónde nos visitas?
                </IonLabel>
                <IonTextarea></IonTextarea>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default ContactUs
