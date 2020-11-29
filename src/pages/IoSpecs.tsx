import { IonPage, IonBackButton, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonContent, IonTitle, IonText } from '@ionic/react';
import React from 'react';
import Dashboard from '../components/Dashboard';
import SendCommand from '../components/SendCommand';

const IoSpecs: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton text="" defaultHref="home" />
                    </IonButtons>
                    <IonTitle class="ion-text-center">IO Specs</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <SendCommand />
            </IonContent>
        </IonPage>
    );
};

export default IoSpecs;