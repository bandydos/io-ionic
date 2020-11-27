import { IonPage, IonBackButton, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonContent, IonTitle, IonText } from '@ionic/react';
import React from 'react';
import Welcome from '../components/Welcome';
import './Home.css';

const IoSpecs: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonButtons slot="start">
                            <IonBackButton text="" defaultHref="home" />
                        </IonButtons>
                    <IonTitle>IO Specs</IonTitle>
                    </IonToolbar>
                </IonHeader>
            </IonContent>
        </IonPage>
    );
};

export default IoSpecs;