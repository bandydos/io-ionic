import React, { useState } from 'react';
import Paho, { ErrorWithInvocationContext } from 'paho-mqtt';
import host from '../clientcreds/mqtt-host'
import { IonItem, IonList } from '@ionic/react';
interface ShowPinsProps {
}

const initalPins: string[] = [
  'Pin: 6, Status: true',
  'Pin: 7, Status: false'
]
const ShowPins: React.FC<ShowPinsProps> = () => {
  const [pinStatus, setPinStatus] = useState<string[]>(initalPins);

  // Create new Paho client.
  const client = new Paho.Client(host.mqttHost, Number(host.mqttPort), String(host.clientId));

  // Set callback handlers.
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;

  const connectOptions = {
    onSuccess: onConnect,
    onFailure: doFailure,
    userName: host.user,
    password: host.password,
    useSSL: true
  }

  // Connect the client.
  client.connect(connectOptions);

  // Called when the client connects.
  function onConnect() {
    console.log("onConnect");
    client.subscribe("io/in"); // Subscribo to input.
  }

  // On fail.
  function doFailure(e: ErrorWithInvocationContext) {
    console.log(e.errorMessage); // Log error.
  }

  // Called when the client loses its connection.
  function onConnectionLost(responseObject: any) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:" + responseObject.errorMessage);
    }
  }

  // Called when a message arrives.
  function onMessageArrived(message: any) {
    const data = JSON.parse(message.payloadString); // Parse message as json.
    const pin = data.pin;
    const status = data.status;
    addPin(pin, status); // Call addPin with pin and status.
    console.log("onMessageArrived:" + message.payloadString);
  }

  const addPin = (newPin: string, newStatus: string) => {
    setPinStatus([...pinStatus, `Pin: ${newPin}, Status: ${newStatus}`]);
  }


  return (
    <IonList>
      {pinStatus.map((pin, i) => {
        return (
          <IonItem key={'li' + i}>{pin}</IonItem>
        )
      })}
    </IonList>
  );
};

export default ShowPins;
