import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  homeOutline,
  homeSharp,
  airplaneOutline,
  airplaneSharp,
  mapOutline,
  mapSharp,
  helpOutline,
  helpSharp,
  mailOutline,
  mailSharp,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Inicio",
    url: "/page/home",
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
  {
    title: "Rutas Turísticas",
    url: "/page/tourist-routes",
    iosIcon: airplaneOutline,
    mdIcon: airplaneSharp,
  },
  {
    title: "Mapa del sitio",
    url: "/page/site-map",
    iosIcon: mapOutline,
    mdIcon: mapSharp,
  },
  {
    title: "Acerca de nosotros",
    url: "/page/about-us",
    iosIcon: helpOutline,
    mdIcon: helpSharp,
  },
  {
    title: "Contáctanos",
    url: "/page/contact-us",
    iosIcon: mailOutline,
    mdIcon: mailSharp,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Tu destino</IonListHeader>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
