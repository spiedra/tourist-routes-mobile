import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './pages/Home/Index'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'
import TouristRoutes from './pages/TouristRoutes/Index'
import SiteMap from './pages/SiteMap/index'
import AboutUs from './pages/AboutUs/Index'
import ContactUs from './pages/ContactUs/Index'

setupIonicReact()

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId='main'>
          <Menu />
          <IonRouterOutlet id='main'>
            <Route path='/' exact={true}>
              <Home />
            </Route>
            <Route path='/page/home' exact={true}>
              <Home />
            </Route>
            <Route path='/page/tourist-routes' exact={true}>
              <TouristRoutes />
            </Route>
            <Route path='/page/site-map' exact={true}>
              <SiteMap />
            </Route>
            <Route path='/page/about-us' exact={true}>
              <AboutUs />
            </Route>
            <Route path='/page/contact-us' exact={true}>
              <ContactUs />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  )
}

/**
 * 
            <Route path='*' exact={true}>
              <NotFound />
            </Route>
 */

export default App
