import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
} from '@ionic/react'
import Header from '../../components/Header/Header'

const SiteMap: React.FC = () => {
  return (
    <IonPage>
      <Header title='Mapa del sitio' />
      <IonContent>
        <IonGrid>
          <IonRow className='ion-justify-content-center'>
            <IonCol size='12' className='ion-text-center'>
              <IonButton href='/page/home'>Inicio</IonButton>
            </IonCol>
          </IonRow>
          <IonRow className='ion-justify-content-center'>
            <IonCol size='6' className='ion-text-center'>
              <IonButton href='/page/tourist-routes'>
                Zonas turísticas
              </IonButton>
            </IonCol>
            <IonCol size='6' className='ion-text-center'>
              <IonButton href='/page/site-map'>Mapa del sito</IonButton>
            </IonCol>
          </IonRow>
          <IonRow className='ion-justify-content-center'>
            <IonCol size='6' className='ion-text-center'>
              <IonButton href='/page/about-us'>Acerca de nosotros</IonButton>
            </IonCol>
            <IonCol size='6' className='ion-text-center'>
              <IonButton href='/page/contact-us'>Contactanos</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default SiteMap
