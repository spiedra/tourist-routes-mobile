import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonPage,
} from '@ionic/react'
import React from 'react'
import { useState } from 'react'
import Header from '../../components/Header/Header'
import { getTouristRoutesData } from '../../services/gets'

const TouristRoutes: React.FC = () => {
  const [data, setData] = useState<any>([])

  React.useEffect(() => {
    getTouristRoutesData().then((response:any) =>{
        setData(response)
    })
    
  }, [])

  return (
    <IonPage>
      <Header title='Rutas turísticas' />
      <IonContent>
        {data.map((item: any, index: any) => (
          <IonCard key={index}>
            <img src='https://random.imagecdn.app/500/150' alt='Imagen lugar turistico' />
            <IonCardHeader>{item.name}</IonCardHeader>
            <IonCardContent>{item.description}</IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  )
}

export default TouristRoutes
