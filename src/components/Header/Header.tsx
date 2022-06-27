import { IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/react';

const Header = (props:{title:string}) => {
    //const {title} = useParams<{title: string}>()
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot='start'>
          <IonMenuButton />
        </IonButtons>
        <IonTitle>{props.title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
