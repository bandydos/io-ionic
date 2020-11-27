import { IonButtons, IonButton, IonIcon, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonNav, IonRouterLink } from '@ionic/react';
import React from 'react';
import Welcome from '../components/Welcome';
import './Home.css';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonRouterLink href="/home" slot="start" color="light">
            <IonText>Home</IonText>
          </IonRouterLink>
          <IonRouterLink href="/iospecs" slot="end" color="light">
            <IonText>IO Specs</IonText>
          </IonRouterLink>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Welcome />
      </IonContent>
    </IonPage>
  );
};

export default Home;
