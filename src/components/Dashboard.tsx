import React, { useState } from 'react';
import { CommandForm } from './CommandForm';
import './Dashboard.css';
import InOutBlockList from './InOutBlockList';
import Paho, { ErrorWithInvocationContext } from 'paho-mqtt';
import host from '../clientcreds/mqtt-host';
interface DashboardProps {

}

const initialIoBlocks: Array<IOBlock> = [
  { pin: 12, status: false, command: JSON.stringify({ pin: 12, status: false }) },
  { pin: 14, status: false, command: JSON.stringify({ pin: 14, status: false }) }
];

const Dashboard: React.FC<DashboardProps> = () => {
  const [ioBlocks, setIoBlocks] = useState<IOBlock[]>(initialIoBlocks);
  const [command, setCommand] = useState<object>({});

  const addBlock: AddBlock = (newPin, newStatus) => {
    const newCommand = JSON.stringify({ pin: newPin, status: newStatus });
    setIoBlocks([...ioBlocks, { pin: parseInt(newPin), status: newStatus, command: newCommand }]) // Add new block.
    setCommand({ pin: newPin, status: newStatus });
  }

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
    let message = new Paho.Message(JSON.stringify(command));
    message.destinationName = "io/out";
    client.send(message);
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
    console.log("onMessageArrived:" + message.payloadString);
  }


  return (
    <React.Fragment>
      <InOutBlockList blocks={ioBlocks} />
      <div className="margin-left"  >
        <CommandForm command={command} addBlock={addBlock} name="addpin" label="Add pin" />
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
