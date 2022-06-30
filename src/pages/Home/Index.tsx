/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonItem,
  IonCard,
  IonCardHeader,
  IonCardContent,
  useIonAlert,
} from "@ionic/react";

import Header from "../../components/Header/Header";
import Modal from "../../components/Modal";
import { getRecommendedTouristClass } from "../../services/posts";
import { getRecommendedRoutes } from "../../services/gets";
import {
  getMapCoordinates,
  getRandomImage,
  randomNumberByRange,
} from "../../utils";

const category = {
  peaceful: "pacifista",
  conqueror: "aventurero",
  extremist: "extremista",
};

const Home: React.FC = () => {
  const [inputs, setInputs] = useState({});
  const [touristPlace, setTouristPlace] = useState<any>();
  const [touristRoutePlaces, setTouristRoutePlaces] = useState([]);
  const [isModalPlacesOpen, setIsModalPlacesOpen] = useState(false);
  const [touristClass, setTouristClass] = useState();
  const [touristRoutes, setTouristRoutes] = useState([]);
  const [isModalShowPlaceOpen, setIsModalShowPlaceOpen] = useState(false);
  const [present] = useIonAlert();

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onShowTouristPlaces = (index) => {
    for (const iterator of touristRoutes[index].places) {
      iterator["src"] = getRandomImage(randomNumberByRange(0, 19));
    }

    setTouristRoutePlaces(touristRoutes[index].places);
    setIsModalPlacesOpen(true);
  };

  const onShowPlaceDetails = (index) => {
    setTouristPlace(touristRoutePlaces[index]);
    setIsModalShowPlaceOpen(true);
  };

  const getLocation = () => {
    const { x, y } = getMapCoordinates(randomNumberByRange(0, 9));
    return (
      "https://maps.google.com/?ll=" + x + "," + y + "&z=14&t=m&output=embed"
    );
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (Object.values(inputs).length > 4) {
      const recommendedClass = await getRecommendedTouristClass(inputs);
      setTouristClass(category[recommendedClass.result]);

      getRecommendedRoutes(recommendedClass.result).then((response) => {
        setTouristRoutes(response.touristRouteResult);
      });
    } else {
      present("Debe ingresar los valores", [{ text: "Aceptar" }]);
    }
  };

  const modalPlacesBody = (
    <IonContent>
      {touristRoutePlaces.map((item: any, index: any) => (
        <IonCard key={index} onClick={() => onShowPlaceDetails(index)}>
          <img
            style={{
              objectFit: "cover",
            }}
            src={item.src}
            alt={"Imagen lugar turistico"}
          />
          <IonCardHeader>{item.title}</IonCardHeader>
          <IonCardContent>{item.description}</IonCardContent>
        </IonCard>
      ))}
    </IonContent>
  );

  const modalShowPlaceBody = (
    <>
      {touristPlace && (
        <div style={{ padding: "0 .8rem .8rem .8rem" }}>
          <h1>{touristPlace.name}</h1>
          <h3>{touristPlace.location}</h3>
          <img
            style={{
              objectFit: "cover",
            }}
            src={touristPlace.src}
            alt={"Imagen lugar turistico"}
          />
          <h3>Localización en mapa</h3>
          <iframe
            src={getLocation()}
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <h3>{`Acerca de la ruta ${touristPlace.name}`}</h3>
          <p>{touristPlace.description}</p>
        </div>
      )}
    </>
  );

  return (
    <>
      <Modal
        isOpen={isModalPlacesOpen}
        title={"Tipo " + touristClass}
        onClose={() => setIsModalPlacesOpen(false)}
        content={modalPlacesBody}
      />

      <Modal
        isOpen={isModalShowPlaceOpen}
        title={"Detalles de la zona turística"}
        onClose={() => setIsModalShowPlaceOpen(false)}
        content={modalShowPlaceBody}
      />

      <IonPage>
        <Header title="Inicio" />
        <h1 className="ion-text-center">Recomendador de Rutas Turísticas</h1>
        <IonContent>
          <form onSubmit={handleSubmit}>
            <IonGrid>
              <IonRow className="ion-justify-content-center">
                <IonCol size="10" sizeLg="3">
                  <IonItem>
                    <IonLabel color="tertiary" position="floating">
                      Precio
                    </IonLabel>
                    <IonSelect
                      interface="popover"
                      name="price"
                      onIonChange={handleChange}
                    >
                      <IonSelectOption value="low">$400-$750</IonSelectOption>
                      <IonSelectOption value="medium">
                        $750-$1500
                      </IonSelectOption>
                      <IonSelectOption value="high">
                        $1500-$4000
                      </IonSelectOption>
                    </IonSelect>
                  </IonItem>
                </IonCol>
                <IonCol size="10" sizeLg="3">
                  <IonItem>
                    <IonLabel color="tertiary" position="floating">
                      Categoría
                    </IonLabel>
                    <IonSelect
                      interface="popover"
                      name="type"
                      onIonChange={handleChange}
                    >
                      <IonSelectOption value="mountain">
                        Montaña
                      </IonSelectOption>
                      <IonSelectOption value="beach">Playa</IonSelectOption>
                      <IonSelectOption value="city">Ciudad</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                </IonCol>
                <IonCol size="10" sizeLg="3">
                  <IonItem>
                    <IonLabel color="tertiary" position="floating">
                      Servicios
                    </IonLabel>
                    <IonSelect
                      interface="popover"
                      name="services"
                      onIonChange={handleChange}
                    >
                      <IonSelectOption value="none">Ninguno</IonSelectOption>
                      <IonSelectOption value="some">Algunos</IonSelectOption>
                      <IonSelectOption value="many">Muchos</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                </IonCol>
                <IonCol size="10" sizeLg="3">
                  <IonItem>
                    <IonLabel color="tertiary" position="floating">
                      Acceso
                    </IonLabel>
                    <IonSelect
                      interface="popover"
                      name="access"
                      onIonChange={handleChange}
                    >
                      <IonSelectOption value="walk">A pie</IonSelectOption>
                      <IonSelectOption value="car">Por carro</IonSelectOption>
                      <IonSelectOption value="sea">Por mar</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                </IonCol>
                <IonCol size="10" sizeLg="3">
                  <IonItem>
                    <IonLabel color="tertiary" position="floating">
                      Cantidad/Capacidad de personas
                    </IonLabel>
                    <IonSelect
                      interface="popover"
                      name="capacity"
                      onIonChange={handleChange}
                    >
                      <IonSelectOption value="low">1 a 3</IonSelectOption>
                      <IonSelectOption value="medium">3 a 6</IonSelectOption>
                      <IonSelectOption value="high">6 a muchas</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                </IonCol>
                <IonCol size="10" sizeLg="3" className="ion-text-center">
                  <IonButton color="primary" type="submit">
                    Consultar
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </form>

          {touristRoutes.map((item: any, index: any) => (
            <IonCard key={index} onClick={() => onShowTouristPlaces(index)}>
              <IonCardHeader>{item.title}</IonCardHeader>
              <IonCardContent>{item.description}</IonCardContent>
            </IonCard>
          ))}
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
