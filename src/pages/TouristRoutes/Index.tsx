import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
} from '@ionic/react'
import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Modal from '../../components/Modal'
import { getTouristRoutesData } from '../../services/gets'
import { getRandomImage, randomNumberByRange } from '../../utils'

const TouristRoutes: React.FC = () => {
  const [data, setData] = useState<any>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [touristRoutesData, setTouristRoutesData] = useState([])
  const [modalData, setModalData] = useState<any>()

  useEffect(()=>{
    getTouristRoutesData().then((response:any) =>{
      setData(response)
      setTouristRoutesData(response)
    })
  }, [])

  const handleOnClick = (index: number) => {
    setModalData(
      touristRoutesData[index]
    )
    setIsModalOpen(true)
  }

  React.useEffect(() => {
    getTouristRoutesData().then((response: any) => {
      for (const iterator of response) {
        iterator['src'] = getRandomImage(randomNumberByRange(0, 19))
      }
      setData(response)
    })
  }, [])
  
  const modalBody = (
    <>
      {modalData ? (
        <>
          <h1>{modalData.name}</h1>
          <h2>{modalData.location}</h2>
          <IonGrid>
            <IonRow>
              <img
                src={getRandomImage(randomNumberByRange(0, 19))}
                alt='Imagen lugar turístico'
              />
            </IonRow>
          </IonGrid>
        </>
      ) : (
        'Cargando'
      )}
    </>
  )

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={modalBody}
      />
      <IonPage>
        <Header title='Rutas turísticas' />
        <IonContent>
          {data.map((item: any, index: number) => (
            <IonCard
              key={index}
              onClick={() => {
                handleOnClick(index)
              }}
            >
              <img
                style={{
                  objectFit: 'cover',
                }}
                src={item.src}
                alt={'Imagen lugar turistico'}
              />
              <IonCardHeader>{item.name}</IonCardHeader>
              <IonCardContent>{item.description}</IonCardContent>
            </IonCard>
          ))}
        </IonContent>
      </IonPage>
    </>
  )
}

export default TouristRoutes
