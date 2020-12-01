import { IonHeader, IonPage, IonTitle, IonToolbar, IonContent, IonButtons, IonButton } from '@ionic/react';
import React from 'react';
import ShowPins from '../components/ShowPins';
import './Home.css';
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle class="ion-text-center">IO monitor</IonTitle>
          <IonButtons slot="end">
            <IonButton href="/iospecs" color="light">Send command</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ShowPins />
      </IonContent>
    </IonPage>
  );
};

export default Home;
