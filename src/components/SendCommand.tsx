import { IonButton, IonInput } from '@ionic/react';
import React from 'react';
import './SendCommand.css';

interface SendCommandProps {  }

const SendCommand: React.FC<SendCommandProps> = () => {
  return (
    <div className="container">
      <strong>Send command</strong>
      <IonInput></IonInput>
      <IonButton>send</IonButton>
    </div>
  );
};

export default SendCommand;
