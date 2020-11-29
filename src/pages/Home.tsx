import { IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonNav, IonRouterLink, IonFooter, IonContent, IonButtons, IonButton } from '@ionic/react';
import React from 'react';
import Welcome from '../components/Welcome';
import './Home.css';
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle class="ion-text-center">Home</IonTitle>
          <IonButtons slot="end">
            <IonButton href="/iospecs" color="light">IO Specs</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Welcome />
      </IonContent>
    </IonPage>
  );
};

export default Home;
