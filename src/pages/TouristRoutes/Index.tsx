import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonPage,
} from "@ionic/react";
import React from "react";
import { useState } from "react";
import Header from "../../components/Header/Header";
import { getTouristRoutesData } from "../../services/gets";
import { getRandomImage, randomNumberByRange } from "../../utils";

const TouristRoutes: React.FC = () => {
  const [data, setData] = useState<any>([]);

  React.useEffect(() => {
    getTouristRoutesData().then((response: any) => {
      for (const iterator of response) {
        iterator['src'] = getRandomImage(randomNumberByRange(0, 19))
      }
      setData(response);
    });
  }, []);

  return (
    <IonPage>
      <Header title="Rutas turísticas" />
      <IonContent>
        {data.map((item: any, index: any) => (
          <IonCard key={index}>
            <img
              style={{
                objectFit: "cover",
              }}
              src={item.src}
              alt={"Imagen lugar turistico"}
            />
            <IonCardHeader>{item.name}</IonCardHeader>
            <IonCardContent>{item.description}</IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default TouristRoutes;
