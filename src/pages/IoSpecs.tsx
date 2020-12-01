import { IonPage, IonBackButton, IonHeader, IonToolbar, IonButtons, IonContent, IonTitle } from '@ionic/react';
import React from 'react';
import Dashboard from '../components/Dashboard';

const IoSpecs: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton text="" defaultHref="home" />
                    </IonButtons>
                    <IonTitle class="ion-text-center">Send command</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Dashboard />
            </IonContent>
        </IonPage>
    );
};

export default IoSpecs;