import React, { useState } from 'react';
import { CommandForm } from './CommandForm';
import './Dashboard.css';
import InOutBlockList from './InOutBlockList';

interface DashboardProps { }

const initialIoBlocks: Array<IOBlock> = [
  { pin: 12, status: true },
  { pin: 14, status: false }
];

const Dashboard: React.FC<DashboardProps> = () => {
  const [ioBlocks, setIoBlocks] = useState(initialIoBlocks);

  const addBlock: AddBlock = (newPin, newStatus) => {
    setIoBlocks([...ioBlocks, {pin: parseInt(newPin), status: newStatus}])
  }

  return (
    <React.Fragment>
      <InOutBlockList blocks={ioBlocks} />
      <CommandForm addBlock={addBlock} name="addpin" label="Add pin"></CommandForm>
    </React.Fragment>
  );
};

export default Dashboard;
